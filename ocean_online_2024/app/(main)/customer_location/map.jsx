// OpenLayersMap.js

import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Icon } from 'ol/style';

const OpenLayersMap = ({ location }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapObject = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([100.9925, 13.7563]), // ตำแหน่งเริ่มต้นที่ไทย
        zoom: 6,
      }),
    });

    // เพิ่มเลเยอร์สำหรับปักหมุด
    const vectorLayer = new VectorLayer({
      source: new VectorSource(),
    });
    mapObject.addLayer(vectorLayer);

    setMap(mapObject);

    return () => mapObject.dispose(); // ทำความสะอาด
  }, []);

  useEffect(() => {
    if (map && location) {
      addMarker(location);
    }
  }, [map, location]);

  const addMarker = (coord) => {
    const marker = new Feature({
      geometry: new Point(fromLonLat(coord)),
    });
    marker.setStyle(
      new Style({
        image: new Icon({
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // เปลี่ยนเป็นไอคอนของคุณ
          scale: 0.1,
        }),
      })
    );
    map
      .getLayers()
      .getArray()
      .find(layer => layer instanceof VectorLayer)
      .getSource()
      .addFeature(marker);
  };

  return <div ref={mapRef} className="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default OpenLayersMap;
