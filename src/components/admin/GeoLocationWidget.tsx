import { useEffect, useState } from "react";

type GeoInfo = { city: string; country: string; country_code: string };

export default function GeoLocationWidget() {
  const [geo, setGeo] = useState<GeoInfo | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem("geoInfo");
    if (cached) {
      setGeo(JSON.parse(cached));
    } else {
      fetch("https://ipapi.co/json/")
        .then(res => res.json())
        .then(data => {
          const info = { city: data.city, country: data.country_name, country_code: data.country_code };
          setGeo(info);
          localStorage.setItem("geoInfo", JSON.stringify(info));
        });
    }
  }, []);

  if (!geo) return <div className="p-6">Loading location...</div>;
  return (
    <div className="bg-white dark:bg-card rounded shadow p-6 flex items-center gap-4">
      <span className="text-3xl">
        {geo.country_code ? (
          <img src={`https://flagcdn.com/32x24/${geo.country_code.toLowerCase()}.png`} alt={geo.country} />
        ) : null}
      </span>
      <div>
        <div className="font-bold">{geo.city}</div>
        <div className="text-sm text-gray-500">{geo.country}</div>
      </div>
    </div>
  );
}
