import { getDiagnoseColors } from '@/src/lib/charts/index';
import { alpha } from '@mui/material';

export const backgroundCirclePlugin = {
  id: 'backgroundCircle',
  // @ts-expect-error
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx } = chart;
    ctx.save();

    const data = chart.getDatasetMeta(0).data[0];
    const angle = Math.PI / 180;

    ctx.beginPath();
    const color = getDiagnoseColors(chart.getDatasetMeta(0).data[0].$context.parsed).background;
    ctx.fillStyle = alpha(color, 0.2);
    ctx.arc(data.x, data.y, data.outerRadius, 0, angle * 360, false);
    ctx.fill();
  },
};

export const centerDoughnutPlugin = {
  id: 'annotateDoughnutCenter',
  // @ts-expect-error
  beforeDatasetsDraw: (chart) => {
    const width = chart.width;
    const height = chart.height;
    const ctx = chart.ctx;

    ctx.restore();
    const fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + 'em sans-serif';
    ctx.textBaseline = 'middle';

    const text = chart.getDatasetMeta(0).data[0].$context.parsed;
    const x = Math.round((width - ctx.measureText(text).width) / 2);
    const y = height / 1.87;
    const color = getDiagnoseColors(chart.getDatasetMeta(0).data[0].$context.parsed).text;
    ctx.fillStyle = color;

    ctx.fillText(text, x, y);
    ctx.save();
  },
};

export const dougnutPlugins = [backgroundCirclePlugin, centerDoughnutPlugin];
