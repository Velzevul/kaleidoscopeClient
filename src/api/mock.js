import instoryP4 from './mockData/instory-p4.json';
import instoryP5 from './mockData/instory-p5.json';
import instoryP6 from './mockData/instory-p6.json';
import instoryP7 from './mockData/instory-p7.json';
import instoryP8 from './mockData/instory-p8.json';
import instoryP9 from './mockData/instory-p9.json';
import instoryP10 from './mockData/instory-p10.json';
import instoryP11 from './mockData/instory-p11.json';
import instoryP12 from './mockData/instory-p12.json';
import instoryP13 from './mockData/instory-p13.json';
import instoryP14 from './mockData/instory-p14.json';
import instoryP15 from './mockData/instory-p15.json';
import instoryP16 from './mockData/instory-p16.json';
import instoryP17 from './mockData/instory-p17.json';

const mockData = {
  'instory-p4': instoryP4,
  'instory-p5': instoryP5,
  'instory-p6': instoryP6,
  'instory-p7': instoryP7,
  'instory-p8': instoryP8,
  'instory-p9': instoryP9,
  'instory-p10': instoryP10,
  'instory-p11': instoryP11,
  'instory-p12': instoryP12,
  'instory-p13': instoryP13,
  'instory-p14': instoryP14,
  'instory-p15': instoryP15,
  'instory-p16': instoryP16,
  'instory-p17': instoryP17
}

export const getTrail = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(mockData[id]);
    }, 1000);
  });
};
