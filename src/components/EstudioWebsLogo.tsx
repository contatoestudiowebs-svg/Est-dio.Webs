import React from 'react';

interface EstudioWebsLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export const ESTUDIO_WEBS_LOGO_URL =
  'https://static.wixstatic.com/media/cbfc82_73d79161f8d746778c9c4700c203407e~mv2.png/v1/fill/w_63,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cbfc82_73d79161f8d746778c9c4700c203407e~mv2.png';

export function EstudioWebsLogo({
  className = 'w-10 h-8',
  size,
}: EstudioWebsLogoProps) {
  return (
    <img
      src={ESTUDIO_WEBS_LOGO_URL}
      alt="Logo Oficial Estúdio Webs"
      className={`${className} object-contain`}
      style={size ? { width: size, height: 'auto', maxHeight: size } : undefined}
    />
  );
}
