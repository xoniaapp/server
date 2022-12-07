import pino from "pino";
import dayjs from "dayjs";

const log = pino({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
