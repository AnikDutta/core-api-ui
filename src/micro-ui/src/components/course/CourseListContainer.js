import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as courseAction from '../../action/CourseAction';
import * as authAction from '../../action/AuthAction';
import CourseList from './CourseList';
import { withAuth } from '@okta/okta-react';


export class CourseListContainer extends React.Component {


    async componentDidMount() {
        await this.props.action.checkAuthentication(this.props.auth);
        this.props.action.getCoursesAction()
        .catch(error => {
            toastr.error(error);
        });
    }
    async componentDidUpdate() {

    }

    handleAddCourse=()=>{
        this.props.history.push('/add_edit');
    }


    handleDelete = (selectedCourseId) => {
        if (selectedCourseId) {
            this.props.action.deleteCourseAction(selectedCourseId)
                .then(()=>{
                    console.log(`Course List after delete in then`,this.props.courses);
                    })
                .catch(error => {
                    toastr.error(error);
                });
        }
        console.log(`Course List after delete`,this.props.courses);
    }

    render() {
        const { courses } = this.props;
        console.log(`Course List after Render`,this.props.courses);
        if (!courses) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Courses</h1>                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleAddCourse}
                            >
                                <i className="fa fa-plus" aria-hidden="true"/> New
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <CourseList courses={courses} handleDelete = {this.handleDelete}/>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    courses: state.coursesReducer.courses,
    authenticated : state.authReducer.authenticated,
    userinfo : state.authReducer.userinfo
});



const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators({...courseAction, ...authAction}, dispatch)

});



CourseListContainer.propTypes = {
    courses: PropTypes.array,
    action: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    userinfo: PropTypes.array,
    authenticated: PropTypes.bool.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(withAuth(CourseListContainer));
