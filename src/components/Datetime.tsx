export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({ datetime, size = "sm", className }: Props) {
  return (
    <div className={`flex items-center opacity-80 ${className}`}>
      <span className={` ${size === "sm" ? "text-sm" : "text-base"}`}>
        Posted on:&nbsp;
        <FormattedDatetime datetime={datetime} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const year = myDatetime.getFullYear().toString();
  const month = (myDatetime.getMonth() + 1).toString().padStart(2, "0");
  const day = myDatetime.getDate().toString().padStart(2, "0");

  return `${year}/${month}/${day}`;
};
