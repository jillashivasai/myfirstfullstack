import * as React from 'react';
import './index.css';
import { BarChart } from '@mui/x-charts/BarChart';

const TaskSummaryChart = ({ xAxisData, seriesData, width, height }) => {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: xAxisData }]}
      series={seriesData}
      width={width}
      height={height}
    />
  );
};

const TaskSummaryPage = ({ tasks }) => {
  // Ensure tasks array is not undefined
  if (!tasks || tasks.length === 0) {
    return <div className='mt'>No tasks available</div>;
  }

  // Calculate total tasks and unique users
  const totalTasks = tasks.length;
  const users = [...new Set(tasks.map(task => task.assignedTo))];
  const totalUsers = users.length;

  // Calculate number of tasks assigned to each user
  const tasksPerUser = users.map(user => {
    const completedCount = tasks.filter(task => task.assignedTo === user && task.status === 'complete').length;
    const notCompletedCount = tasks.filter(task => task.assignedTo === user && task.status === 'pending').length;
    return {
      user: user,
      count: tasks.filter(task => task.assignedTo === user).length,
      completedCount: completedCount,
      notCompletedCount: notCompletedCount
    };
  });

  // Data for the bar charts
  const userMetricsXAxisData = tasksPerUser.map(item => item.user);
  const userMetricsSeriesData = [{ data: tasksPerUser.map(item => item.count) }];
  const userMetricsSeriesData1 = [
    { data: tasksPerUser.map(item => item.completedCount), name: 'Completed' },
    { data: tasksPerUser.map(item => item.notCompletedCount), name: 'Not Completed' }
  ];

  return (
    <div className='center'>
      <h1>Task Summary</h1>
      <div>Total Tasks: {totalTasks}</div>
      <div>Total Users: {totalUsers}</div>
      <div className="summary-container">
        <div className="summary-bar">
          <TaskSummaryChart
            xAxisData={userMetricsXAxisData}
            seriesData={userMetricsSeriesData}
            width={500}
            height={300}
          />
        </div>
        <div className="summary-bar">
          <TaskSummaryChart
            xAxisData={userMetricsXAxisData}
            seriesData={userMetricsSeriesData1}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskSummaryPage;
