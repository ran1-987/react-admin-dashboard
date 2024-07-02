import { ResponsiveCalendar } from "@nivo/calendar";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockCalenderData as data } from "../data/mockData";

const CalendarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveCalendar
      data={data}
      from="2015-03-01"
      to="2016-07-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor={colors.grey[400]}
      dayBorderWidth={2}
      dayBorderColor={colors.grey[400]}
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
          itemTextColor: `${colors.grey[500]} !important`,
        },
      ]}
    />
  );
};

export default CalendarChart;
