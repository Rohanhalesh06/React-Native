import { useEffect,useState } from "react";
import yelp  from "../../api/yelp";

const useResults = () => {
    const [results,setResults] = useState([])
    const [errorMessage,setErrorMessage] = useState('')
    const searchApi = async (string) => {
        console.log("main api call")
    
        try{
    
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    term:string,
                    location:'san jose'
                },
            });
           // console.log(response.data.businesses.image_url)
            setResults(response.data.businesses)
            setErrorMessage('')
        }
        catch(err){
            setErrorMessage('Something went Wrong ');
    
        }}
    
    
        useEffect(() => {
            searchApi('pasta')
        },[]);

        return [searchApi,results,errorMessage]


};

export default useResults;