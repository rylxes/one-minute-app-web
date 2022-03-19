import React, {useEffect, useState} from 'react'
import SSRStorage from '../../services/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const storage = new SSRStorage();
const Index = () => {
     const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
   
    useEffect(() => {


    }, [])



    return (
        <>
        <div class="content">
        <div class="header-clear"></div>
        
                        
        <div class="container">
            <h4>Successfully shared poll</h4>
            <div class="decoration"></div>
            <div class="recent-poll-wrap">
                                        
               
            </div>

            
        </div>			
        
        <div class="bottom-fix"></div>

    </div> 
        </>
    );
}

export default Index
