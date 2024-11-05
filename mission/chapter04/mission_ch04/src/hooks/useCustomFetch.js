import { useEffect, useState } from "react";
import axios from "axios";

const useCustomFetch = (url) =>{
    const [data, setData] = useState([]); // 데이터 저장
    const [isLoading, setIsLoading] = useState(false); // 데이터 로딩 여부
    const [isError, setIsError] = useState(false); // 에러 발생 여부
    
    useEffect(()=>{ // url이 바뀔 때마다 데이터 가져오기
        const fetchData = async()=>{ // 데이터 가져오는 비동기 함수
            setIsLoading(true); // 로딩 상태를 true로 변경하여 데이터가 가져오는 중임을 나타냄
            try{
                const response = await axios.get(url);
                setData(response.data); // 데이터 요청 성공 시 데이터 저장
            }
            catch (error){ // 데이터 요청 실패 시 에러 처리
                setIsError(error);
            }
            finally{
                setIsLoading(false); // 데이터 요청이 끝나면 로딩 상태를 false로 변경
            }
        }
        fetchData(); // 데이터 가져오기
    },[url]);

    return {data,isLoading,isError};
}

export default useCustomFetch;