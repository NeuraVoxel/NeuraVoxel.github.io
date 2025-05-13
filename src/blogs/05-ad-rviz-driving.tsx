export default {
    id: 3,
    excerpt: '以下是自动驾驶中感知要素的系统性整理，综合环境感知、车身状态感知及技术实现要点。',
    slug: '',
    title: '自动驾驶：行车感知数据在RVIZ中可视化',
    date: '2025-05-14',
    category: 'rviz',
    imageUrl: '/images/blog/autoware_universe_front.png',
    content: `
    <h2>行车感知</h2>
      <p>以下是自动驾驶中感知要素的系统性整理，综合环境感知、车身状态感知及技术实现要点：</p>
    
    <h2>静态要素</h2>
      <p>1. 道路结构</p>
      <p>包括车道线、路沿、交通标线（如转向箭头、斑马线）、道路几何属性（坡度、曲率）等。通过摄像头语义分割与激光雷达点云融合实现高精度识别。</p>
      <image width="100%" height="100%" src="/images/blog/ad-rviz-driving-perception.png" alt="" />

      <p>2. 交通标识与信号</p>
      <p>如限速牌、红绿灯状态。视觉算法结合自然语言处理（NLP）解析语义，V2X技术预知信号灯相位以应对遮挡。</p>
      <image width="100%" height="100%" src="/images/blog/ad-rviz-driving-perception-trl.png" alt="" />

      <p>3. 基础设施</p>
      <p>护栏、隔离墩、建筑物等静态障碍物，通过激光雷达聚类与多传感器融合降低误检率。</p>
      <image width="100%" height="100%" src="/images/blog/ad-rviz-driving.png" alt="" />

      <p>4. 高精度地图</p>
      <p>预存车道级信息，与实时感知数据（如GPS、IMU）融合，提升定位精度至厘米级。</p>
      <image width="100%" height="100%" src="/images/blog/ad-rviz-driving-perception-hdmap.png" alt="" />

    <h2>动态要素</h2>
      <p>1. 移动物体</p>
      <p>车辆、行人、非机动车等，需检测位置、速度及运动轨迹。毫米波雷达测速、激光雷达追踪三维运动状态。</p>

      <p>2. 交通标识与信号</p>
      <p>如限速牌、红绿灯状态。视觉算法结合自然语言处理（NLP）解析语义，V2X技术预知信号灯相位以应对遮挡。</p>

      <p>3. 基础设施</p>
      <p>护栏、隔离墩、建筑物等静态障碍物，通过激光雷达聚类与多传感器融合降低误检率。</p>

      <p>4. 高精度地图</p>
      <p>预存车道级信息，与实时感知数据（如GPS、IMU）融合，提升定位精度至厘米级。</p>

      <image width="100%" height="100%" src="/images/blog/ad-rviz-driving-perception-traffic.png" alt="" />
      
    <h2>车身状态感知</h2>
      <p>车辆运动状态</p>
      <p>通过IMU（加速度计、陀螺仪）测量速度、角速度，结合轮速传感器校准姿态。</p>

      <p>定位信息</p>  
      <ul>
        <li>绝对定位：GNSS（厘米级增强信号）提供全局位置，SLAM技术实时构建未知环境地图。</li>
        <li>相对定位：激光雷达与高精度地图匹配，解决隧道等GNSS失效场景的定位问题。</li>
      </ul> 

    <h2>参考文献</h2>
      <ol>
      <li> <a href="https://autowarefoundation.github.io/autoware.universe_planning/main/common/autoware_auto_perception_rviz_plugin/" target="_blank">autoware_auto_perception_rviz_plugin</a></li> 
      </ol>
      
      <h2>开始使用 NeuraVoxel 的解决方案</h2>
      <p>如果您想了解更多关于 NeuraVoxel 解决方案的信息，请查看我们的<a href="/examples">示例代码</a>或<a href="/docs">技术文档</a>。我们还提供专业的<a href="/training">培训课程</a>，帮助您的团队快速掌握这些技术。</p>
    `
};