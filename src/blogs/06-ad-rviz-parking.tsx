export default {
    id: 3,
    excerpt: '泊车感知是自动泊车系统的核心环节，其感知元素涵盖静态环境、动态障碍物、车辆状态等多维度信息。结合当前技术发展与行业应用，泊车感知元素可系统整理如下：',
    slug: '',
    title: '自动驾驶：泊车数据在RVIZ中可视化',
    date: '2025-05-14',
    category: 'rviz',
    imageUrl: '/images/blog/ad-rviz-parking-0.jpg',
    content: `
    <h2>泊车感知元素分类</h2>
      <p>泊车感知是自动泊车系统的核心环节，其感知元素涵盖静态环境、动态障碍物、车辆状态等多维度信息。结合当前技术发展与行业应用，泊车感知元素可系统整理如下：</p>
      <image width="100%" height="100%" src="/images/blog/ad-rviz-parking.png" alt="" />
    
    <h2>静态环境感知</h2>
      <p>1. 停车位检测</p>
      <ul>
        <li>几何特征识别：通过摄像头捕捉停车位标线、形状（平行/垂直/斜列）及尺寸，结合激光雷达点云数据验证车位边界。</li>
        <li>语义理解：利用语义分割算法区分可泊车区域与禁停区（如消防通道、公交专用道）。</li>
        <li>车位状态判断：通过超声波传感器检测车位占用情况（如障碍物存在性）。</li>
      </ul>

      <p>2. 道路结构感知</p>
      <ul>
        <li>车道线与路沿识别：摄像头结合边缘检测算法提取车道线，毫米波雷达辅助验证路沿物理位置。</li>
        <li>路面属性分析：基于图像纹理特征（如沥青/水泥/草坪）判断路面摩擦系数，影响路径规划的安全性。</li>
      </ul>

      <p>3. 基础设施检测</p>
      <ul>
        <li>静态障碍物：识别护栏、隔离墩、墙体等固定物体，激光雷达点云聚类技术区分类型并标注安全距离。</li>
        <li>交通标识与信号：通过视觉识别停车标志、限高杆等，并与高精度地图数据融合验证。</li>
      </ul>

    <h2>动态障碍物感知</h2>
      <p>1. 移动物体检测</p>
      <ul>
        <li>车辆与行人：毫米波雷达测速与摄像头目标检测结合，实时跟踪动态障碍物的位置与运动轨迹。</li>
        <li>临时障碍物：施工锥桶、掉落物等通过时序跟踪算法区分临时静态与动态物体。</li>
      </ul>

      <p>2. 特殊场景处理</p>
      <ul>
        <li>低矮障碍物：超声波传感器与视觉融合检测路缘石、减速带等，避免底盘剐蹭。</li>
        <li>恶劣天气干扰：激光雷达点云去噪与毫米波雷达穿透性互补，提升雨雪雾天感知鲁棒性。</li>
      </ul>

      <h2>结语​</h2>
      <blockquote>
      泊车感知系统通过多传感器协同与智能算法，实现了从环境建模到精准控制的闭环。未来，随着高精度传感器与车路协同技术的普及，泊车感知将向全场景、全天候、高可靠性方向持续演进。
      </blockquote>

    <h2>参考文献</h2>
      <ol>
      <li> <a href="https://autowarefoundation.github.io/autoware.universe_planning/main/common/autoware_auto_perception_rviz_plugin/" target="_blank">autoware_auto_perception_rviz_plugin</a></li> 
      </ol>
      
      <h2>开始使用 NeuraVoxel 的解决方案</h2>
      <p>如果您想了解更多关于 NeuraVoxel 解决方案的信息，请查看我们的<a href="/examples">示例代码</a>或<a href="/docs">技术文档</a>。我们还提供专业的<a href="/training">培训课程</a>，帮助您的团队快速掌握这些技术。</p>
    `
};