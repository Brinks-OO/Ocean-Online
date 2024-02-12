// import dynamic from 'next/dynamic';
import LoadingDemo from '../../components/LoadingDemo'
// const LoadingDemo = dynamic(() => import('../../components/LoadingDemo'))
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <LoadingDemo />
  }