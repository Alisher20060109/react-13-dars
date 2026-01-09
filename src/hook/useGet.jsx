import React, { use } from 'react'

const useGet = ({ url }) => {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);

    const getData = async () => {
        try{
            let res = await axios.get('https://dummyjson.com/${url}');
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default useGet
