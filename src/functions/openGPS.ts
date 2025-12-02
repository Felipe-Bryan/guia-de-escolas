import { SchoolType } from '../types/SchoolType';

export function openGPS(school: SchoolType) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (!isIOS) {
    const geoUrl = `geo:${school.latitude},${school.longitude}?q=${encodeURIComponent(
      school.name || `${school.latitude},${school.longitude}`
    )}`;
    window.location.href = geoUrl;
    return;
  }

  const appleUrl = `http://maps.apple.com/?ll=${school.latitude},${school.longitude}&q=${encodeURIComponent(
    school.name || ''
  )}`;

  window.location.href = appleUrl;
}
