import type { DashboardData } from "../types";
import { AlertsFeed } from "./AlertsFeed";
import { BinMap } from "./BinMap";
import { FullnessBarChart } from "./FullnessBarChart";
import { StatusPieChart } from "./StatusPieChart";
import { SummaryCards } from "./SummaryCards";

interface Props {
  data: DashboardData;
}

export const Dashboard: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col justify-between gap-2">
      <SummaryCards summary={data.summary} />
      <StatusPieChart summary={data.summary} />
      <FullnessBarChart bins={data.bins} />
      <BinMap bins={data.bins} />
      <AlertsFeed alerts={data.alerts} />
    </div>
  );
};
