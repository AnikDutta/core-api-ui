import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';;



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};



const titleFormatter = (cell, row) => {
  return `<a href=${row.watchHref} target="_blank">${cell}</a>`;
};



class CourseList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }
    actionFormatter = (cell, row, rowIndex, formatExtraData) => {
        return (<div><button onClick={this.handleEditCourse(row.id)}>Edit</button><button>Delete</button></div>);
    };
    handleEditCourse = (selectedCourseId) => (e) => {
        //const selectedCourseId = this.state.selectedCourseId;
        console.log(`selected course id`,selectedCourseId)
        if (selectedCourseId) {
           // this.setState({selectedCourseId: undefined});            
            //this.props.history.push(`/add_edit/${selectedCourseId}`);
        }        
    }


    render() {
        const columns = [{
                    dataField: 'id',
                    text: 'ID',
                    hidden: true
                }, {
                    dataField: 'title',
                    text: 'Title'
                }, {
                    dataField: 'length',
                    text: 'Length'
                 },{
                    dataField: 'category',
                    text: 'Category'
                 },{
                    dataField: 'authorId',
                    text: 'Author'
                 },{
                    dataField: '',
                    text: 'Actions',
                    formatter : this.actionFormatter 
                 }];

        return (
            <BootstrapTable data={this.props.courses} columns={columns} keyField="id" bordered={false} striped condensed />
               
                
               /*<TableHeaderColumn 
                    dataField="title"
                    dataFormat={titleFormatter} 
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Title
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="length"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Length
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="category"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Category
                </TableHeaderColumn>  

                <TableHeaderColumn 
                    dataField="authorId"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Author
                </TableHeaderColumn>  */  
        );
    }

}



CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};



export default CourseList;
