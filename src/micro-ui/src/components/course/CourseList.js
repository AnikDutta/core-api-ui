import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
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
        return (<div><button onClick={this.handleEdit(row.id)}>Edit</button>
        <button onClick={this.handleDelete(row.id)}>Delete</button></div>);
    };
    handleEdit = (selectedCourseId) => (e) => {
        if (selectedCourseId) {
           this.props.history.push(`/add_edit/${selectedCourseId}`);
        }        
    }
    
    handleDelete= (selectedCourseId) => (e) => {
        if(selectedCourseId){
            this.props.handleDelete(selectedCourseId);
        }
    }
    /*static contextTypes = {
        router: PropTypes.object
    }*/


    render() {
       
        let dataList =  this.props.courses, dataFields, columns = [{
            dataField: '',
            text: 'ACTION',
            formatter : this.actionFormatter 
         }];
        if(dataList && dataList.length){
            dataFields = Object.keys(dataList[0]);
        }
        if(dataFields){
            columns=[...(dataFields.map(dataField=>{
                    return {'dataField': dataField, 'text': dataField.toUpperCase()}
                })), {
                    dataField: '',
                    text: 'ACTION',
                    formatter : this.actionFormatter 
                }];
        }

        return (
            <BootstrapTable data={this.props.courses} columns={columns} keyField="id" bordered={false} striped condensed pagination={ paginationFactory()} />
               
                
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
    courses: PropTypes.array.isRequired
};



export default withRouter(CourseList);
