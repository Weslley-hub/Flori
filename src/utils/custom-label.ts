import { CustomLabelProps } from "@/pages/models/datas-models";

export const renderCustomLabel = ({ name, percent }: CustomLabelProps) => {
  return `${name} (${(percent * 100).toFixed(0)}%)`;
};
