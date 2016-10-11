import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
// import { toggleTodo, receiveTodos } from '../actions';
import * as actions from '../actions';
import {getVisibleTodos} from '../reducers'
import TodoList from './TodoList';
// import {fetchTodos} from '../api';

class VisibleTodoList extends React.Component{
    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevProps){
        if(this.props.filter !== prevProps.filter){
            this.fetchData();
        }
    }

    fetchData(){
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter);
    }

    render(){
        const {toogleTodo, ...rest } = this.props;
        return (
            <TodoList
                {...rest}
                onTodoClick={toogleTodo}
            />
        );
    }
}

const mapStateToProps = (state, {params}) => {
    const filter = params.filter || 'all';
    return{
        todos: getVisibleTodos(state, filter),
        filter
    }
};

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList));

export default VisibleTodoList;