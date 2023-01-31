import axios from "axios";

export const getMyUsers = () => async(dispatch) => {
    try {
       const res = await axios.get("http://localhost:8090/");
       console.log(res.data);
       dispatch({type: 'FETCH_ALL', payload: res.data});
    } catch (error) {
        console.log(error.response.data.message);
    }
}

export const editUser = (userId,navigate,updateUser) => async(dispatch) => {
    try {
        const res = await axios.put(
            `http://localhost:8090/update/${userId}`,
            updateUser
          );
          console.log(res);
        dispatch({type: 'EDIT', payload: res.data});
        navigate('/');
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteSnippet = (id,navigate) => async(dispatch) => {
    try {
        await axios.delete(`http://localhost:8090/user/${id}`)
        dispatch({type: 'DELETE', payload: id});
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}