import { createSlice } from "@reduxjs/toolkit"
import { SenderRequest, deleteRequest, gettRequest, sendRequest, updateRequest } from "./connectionAction"

const initialState={
    loading:false,
    connection:[],
    error:null
}

export const connectionSlice = createSlice({
    name:"connection",
    initialState,
    reducers:{},
    extraReducers:(binders)=>{
        binders.addCase(sendRequest.pending,(state)=>{
            state.loading=true
        });
        binders.addCase(sendRequest.fulfilled,(state,action)=>{
            state.loading=false;
            let connections = state.connection;
            connections.push(action.payload.data.connection);
            state.connection = connections;
            console.log('action.payload.data.connection: ', action.payload.data.connection);
            
        });
        binders.addCase(sendRequest.rejected,(state,action)=>{
            state.loading=false
            state.error = action.error.message 
        })

        binders.addCase(gettRequest.pending,(state)=>{
            state.loading=true
        });
        binders.addCase(gettRequest.fulfilled,(state,action)=>{
            state.loading=false
            state.connection=action.payload.data.connection             
            console.log('action.payload.data.connection: ', action.payload.data.connection);
            
        });
        binders.addCase(gettRequest.rejected,(state,action)=>{
            state.loading=false
            state.error = action.error.message           
        })

        binders.addCase(updateRequest.pending,(state)=>{
            state.loading=true
        });
        binders.addCase(updateRequest.fulfilled,(state,action)=>{
            state.loading=false
            console.log("action",action)
            let connections = state.connection;
            connections.push(action.payload.data.connection);
            state.connection = connections;
            
        });
        binders.addCase(updateRequest.rejected,(state,action)=>{
            state.loading=false
            state.error = action.error.message           
        })

        binders.addCase(deleteRequest.pending,(state)=>{
            state.loading=true
        });
        binders.addCase(deleteRequest.fulfilled,(state,action)=>{
            state.loading=false
            console.log("action",action)
            // state.connection=action.payload.data.connection       
            
        });
        binders.addCase(deleteRequest.rejected,(state,action)=>{
            state.loading=false
            state.error = action.error.message           
        })
        binders.addCase(SenderRequest.pending,(state)=>{
            state.loading=true
        });
        binders.addCase(SenderRequest.fulfilled,(state,action)=>{
            state.loading=false
            console.log('action.payload   : ', action.payload   );  
            console.log("action",action)
            state.connection=action.payload.data.connection        
            
        });
        binders.addCase(SenderRequest.rejected,(state,action)=>{
            state.loading=false
            state.error = action.error.message           
        })
    }
})
export default connectionSlice.reducer;