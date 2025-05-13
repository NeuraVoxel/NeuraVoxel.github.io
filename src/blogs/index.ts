import visualizingAutonomousDrivingData from './visualizing-autonomous-driving-data';
import deepLearningFor3DPointCloud from './deep-learning-for-3d-point-cloud';
import gazeboFireDetection from './03-gazebo-fire-detection';
import slamMappingAndroid from './04-slam-mapping-android';

// 博客文章数据映射
const blogPostsData: { [key: string]: any } = {
    'visualizing-autonomous-driving-data': visualizingAutonomousDrivingData,
    'deep-learning-for-3d-point-cloud': deepLearningFor3DPointCloud,
    'gazeboFireDetection': gazeboFireDetection,
    'slamMappingAndroid': slamMappingAndroid,
};

export default blogPostsData;