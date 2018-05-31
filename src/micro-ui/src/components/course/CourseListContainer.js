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

    constructor() {
        super();
        this.state = {selectedCourseId: undefined};
       // this.checkAuthentication = checkAuthentication.bind(this);
        this.handleAddCourse = this.handleAddCourse.bind(this);
        this.handleEditCourse = this.handleEditCourse.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
    }


    async componentDidMount() {
        //this.props.action.checkAuthentication(this.props.auth);
        console.log(`Userinfo did mount courseList`, this.props.userinfo);
        this.props.action.getCoursesAction()
            .catch(error => {
                toastr.error(error);
            });
        //this.checkAuthentication();
    }
    async componentDidUpdate() {
        //this.checkAuthentication();
    }

    handleAddCourse() {
        this.props.history.push('/course');
    }



    handleEditCourse() {
        const selectedCourseId = this.state.selectedCourseId;

        if (selectedCourseId) {
            this.setState({selectedCourseId: undefined});            
            this.props.history.push(`/course/${selectedCourseId}`);
        }        
    }



    handleDelete() {
        const selectedCourseId = this.state.selectedCourseId;

        if (selectedCourseId) {
            this.setState({selectedCourseId: undefined});                        
            this.props.action.deleteCourseAction(selectedCourseId)
                .catch(error => {
                    toastr.error(error);
                });
        }
    }



    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({selectedCourseId: row.id});
        }
    }



    render() {
        const { courses } = this.props;

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

                            <button
                                type="button"
                                className="btn btn-warning ml-2"
                                onClick={this.handleEditCourse}                                
                            >
                                <i className="fa fa-pencil" aria-hidden="true"/> Edit
                            </button>                                

                            <button
                                type="button"
                                className="btn btn-danger ml-2"
                                onClick={this.handleDelete}
                            >
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleDelete}/> Delete
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <CourseList courses={courses} handleRowSelect={this.handleRowSelect}/>
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
