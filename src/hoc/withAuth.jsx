import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';

const withAuth = WrappedComponent => props => {

    const { authUser, loading } = useFirebaseAuth();
    const router = useRouter()
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        if (router) {
            if (!authUser && !loading) {
                router.push('/login')
            } else {
                setIsVerified(true);
            }
        }
    }, [router,authUser,loading])

    return <>{isVerified && <WrappedComponent {...props} />}</>
};
export default withAuth