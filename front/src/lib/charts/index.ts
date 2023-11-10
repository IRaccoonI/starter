import theme from '@/src/const/defaultTheme';

export const getDiagnoseColors = (value: number) => {
  switch (true) {
    case value >= 90:
      return { background: theme.palette.background.success, text: theme.palette.text.success };
    case value >= 50:
      return { background: theme.palette.background.average, text: theme.palette.text.average };
    default:
      return { background: theme.palette.background.danger, text: theme.palette.text.danger };
  }
};

export enum DiagnoseEnum {
  Performance = 'Представление',
  Accessibility = 'Доступность',
  BestPracties = 'Чистота кодовой базы',
  SEO = 'SEO',
}

export enum MetricEnum {
  FirstContentfulPaint = 'firstContentfulPaint',
  TotalBlockingTime = 'totalBlockingTime',
  SpeedIndex = 'speedIndex',
  LargestContentfulPaint = 'largestContentfulPaint',
  CumulativeLayoutShift = 'cumulativeLayoutShift',
}

const getFirstContentfulPaint = (seconds: number) => {
  switch (true) {
    case seconds <= 1.8:
      return theme.palette.text.success;
    case seconds <= 3:
      return theme.palette.text.average;
    default:
      return theme.palette.text.danger;
  }
};

const getTotalBlockingTime = (milliseconds: number) => {
  switch (true) {
    case milliseconds <= 200:
      return theme.palette.text.success;
    case milliseconds <= 600:
      return theme.palette.text.average;
    default:
      return theme.palette.text.danger;
  }
};

const getSpeedIndex = (seconds: number) => {
  switch (true) {
    case seconds <= 3.4:
      return theme.palette.text.success;
    case seconds <= 5.8:
      return theme.palette.text.average;
    default:
      return theme.palette.text.danger;
  }
};

const getLargestContentfulPaint = (seconds: number) => {
  switch (true) {
    case seconds <= 2.5:
      return theme.palette.text.success;
    case seconds <= 4:
      return theme.palette.text.average;
    default:
      return theme.palette.text.danger;
  }
};

const getCumulativeLayoutShift = (value: number) => {
  switch (true) {
    case value <= 0.1:
      return theme.palette.text.success;
    case value <= 0.25:
      return theme.palette.text.average;
    default:
      return theme.palette.text.danger;
  }
};

type AbstractItem = {
  value?: number;
};

export interface DiagnoseItem extends AbstractItem {
  title: DiagnoseEnum;
}

export interface MetricItem extends AbstractItem {
  title: MetricEnum;
}

export const getMetricRuLocale: Record<MetricEnum, string> = {
  [MetricEnum.FirstContentfulPaint]: 'Первая отрисовка',
  [MetricEnum.TotalBlockingTime]: 'Суммарное время блокировки',
  [MetricEnum.SpeedIndex]: 'Индекс скорости',
  [MetricEnum.LargestContentfulPaint]: 'Самое большое время отрисовки',
  [MetricEnum.CumulativeLayoutShift]: 'Совокупный сдвиг макета',
};

export const getMetricColorLocale: Record<MetricEnum, Function> = {
  [MetricEnum.FirstContentfulPaint]: getFirstContentfulPaint,
  [MetricEnum.TotalBlockingTime]: getTotalBlockingTime,
  [MetricEnum.SpeedIndex]: getSpeedIndex,
  [MetricEnum.LargestContentfulPaint]: getLargestContentfulPaint,
  [MetricEnum.CumulativeLayoutShift]: getCumulativeLayoutShift,
};

export const getMetricUnitFormat: Record<MetricEnum, string> = {
  [MetricEnum.FirstContentfulPaint]: 's',
  [MetricEnum.TotalBlockingTime]: 'ms',
  [MetricEnum.SpeedIndex]: 's',
  [MetricEnum.LargestContentfulPaint]: 's',
  [MetricEnum.CumulativeLayoutShift]: '',
};
