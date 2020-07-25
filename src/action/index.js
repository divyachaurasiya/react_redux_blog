import JsonPlaceHolder from '../apis/JsonPlaceHolder';
import _ from 'lodash';

export const fetchPostsWithUser = () => async (dispatch,getState) => {
        await dispatch(fetchPosts());      
       const userIds = _.uniq(_.map(getState().posts, 'userId'));
       userIds.forEach(id => dispatch(fetchUser(id)));

}

export const fetchPosts = () => async dispatch => {
        const response = await JsonPlaceHolder.get('/posts');
        dispatch({ type : 'FETCH_POST', payload : response.data })      
};  

export const fetchUser = (id) => async dispatch => {
        const response = await JsonPlaceHolder.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER' , payload: response.data })
};

//using memoize
/*export const fetchUser = id => dispatch => {
       return _fetchUser(id,dispatch);
};
const _fetchUser = _.memoize(async function(id,dispatch) {
        const response = await JsonPlaceHolder.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER' , payload: response.data });

}); */