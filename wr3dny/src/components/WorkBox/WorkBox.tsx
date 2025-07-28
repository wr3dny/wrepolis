import { useTranslation } from "react-i18next";

interface Props {
  company: string;
  dateFrom: string;
  dateTo?: string;
  position: string;
  description: string;
}

export const WorkBox = ({
  company,
  dateFrom,
  dateTo,
  description,
  position,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <div>{company}</div>
        <div>{t("at")}</div>
        <div>{t(position)}</div>
        <div>
          {dateFrom} {dateTo ? ` - ${dateTo}` : ""}
        </div>
      </div>
      <div>{t(description)}</div>
    </div>
  );
};
