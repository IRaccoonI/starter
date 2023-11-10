import { ChartOptions } from 'chart.js';

export const generalOptions: ChartOptions = {};

export const pieChartOptions: ChartOptions<'pie'> = {
  ...(generalOptions as ChartOptions<'pie'>),
};

export const lineChartOptions: ChartOptions<'line'> = {
  ...(generalOptions as ChartOptions<'line'>),
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'CPU',
    },
  },
  elements: {
    line: {
      cubicInterpolationMode: 'monotone',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
    },
  },
};

export const dougnutChartOptions: ChartOptions<'doughnut'> = {
  ...(generalOptions as ChartOptions<'doughnut'>),
  radius: '60%',
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
};
