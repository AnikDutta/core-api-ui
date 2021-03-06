import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as courseAction from '../../action/CourseAction';
import * as authorAction from '../../action/AuthorAction';
import CourseForm from './CourseForm'; // eslint-disable-line import/no-named-as-default
import { authorsFormattedForDropdown } from '../../selectors/selectors'; // eslint-disable-line import/no-named-as-default
import { withAuth } from '@okta/okta-react';
import { checkAuthentication } from '../../helpers';


export class AddOrEditCourseContainer extends React.Component {


    constructor() {
        super();
        this.state = {authenticated: null };
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.checkAuthentication = checkAuthentication.bind(this);
    }



    async componentDidMount() {
        this.props.action.getCourseAction(this.props.match.params.id)
            .catch(error => {
                toastr.error(error);
            });

        this.props.action.getAuthorsAction()
            .catch(error => {
                toastr.error(error);
            });
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    handleSave(values) {
        const course = {
            id: values.id,
            title: values.title,
            watchHref: values.watchHref,
            authorId: values.authorId,
            length: values.length,
            category: values.category
        };

        this.props.action.saveCourseAction(course)
            .then(() => {
                toastr.success('Course saved');
                this.props.history.push('/courses');
            }).catch(error => {
                toastr.error(error);
            });
    }



    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/courses');
    }



    render() {
        const { initialValues } = this.props;
        const heading = initialValues && initialValues.id ? 'Edit' : 'Add';

        return (
            <div className="container">
                <CourseForm
                    heading={heading}
                    authors={this.props.authors}
                    handleSave={this.handleSave}
                    handleCancel={this.handleCancel}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    const courseId = ownProps.match.params.id; //from the path '/course/:id'

    if (courseId && state.selectedCourseReducer.course && courseId === state.selectedCourseReducer.course.id) {
        return {
            initialValues: state.selectedCourseReducer.course,
            authors: authorsFormattedForDropdown(state.authorReducer.authors)
        };
    } else {
        return {
            authors: authorsFormattedForDropdown(state.authorReducer.authors)
        };
    }
};



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...authorAction, ...courseAction }, dispatch)
});



AddOrEditCourseContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    authors: PropTypes.array,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(withAuth(AddOrEditCourseContainer));
