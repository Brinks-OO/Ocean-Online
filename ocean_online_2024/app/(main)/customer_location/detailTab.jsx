import React, { useState, useEffect, useRef } from "react";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Dialog } from "primereact/dialog";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { useResizeListener } from "primereact/hooks";
import OpenLayersMap from "./map";

export default function DetailTab(props) {
  const { setAllData, allData, setDetailData, detailData } = props;
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  // console.log('selectedCountry', selectedCountry)
  //   console.log("selectedCity", selectedCity);
  const [selectedItem, setSelectedItem] = useState(null);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [locatCodeRef, setLocaCodeRef] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [state1, setState1] = useState(true);
  const [dates2, setDates2] = useState(null);
  const [postalCode, setPostalCode] = useState("");
  const [locationName, setLocationName] = useState("");

  const [charCount, setCharCount] = useState(0);
  const maxLength = 10;
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue2(newValue);
    setCharCount(newValue.length);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  //   console.log("dates2", dates2);
  //   console.log("dates2", typeof(dates2));

  useEffect(() => {
    console.log("locatCodeRef", locatCodeRef);
    setDetailData(
      {
        locationCode: locatCodeRef,
        locationName: locationName,
        customer: selectedItem,
        provinceState: selectedCountry?.name,
        districtCity: selectedCity?.name,
        postalCode: postalCode,
        id: "",
        name: "Brink Thailand 1",
        lob: "CIT",
        serviceType: "Pick Up",
        dayOfWeek: "Monday",
        startTime: "00.00",
        endTime: "23.59",
        spotTime: false,
        routeGroup: "R3072",
        userCreated: "Admin",
        dtCreated: "20/02/2024",
        userModified: "Admin",
        dtModified: "22/02/2024"
      },
    );

  }, [locatCodeRef, selectedItem, selectedCountry, postalCode, locationName]);

  const [visible, setVisible] = useState(false);

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      {/* <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
      /> */}
      <span className="font-bold white-space-nowrap">Address</span>
    </div>
  );

  const footerContent = (
    <div>
      <Button
        label="Ok"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  const country = [
    { name: "Thailand", code: "THA" },
    { name: "United States", code: "US" },
  ];
  const city = [
    { name: "Bangkok", code: "BKK" },
    { name: "Texas", code: "TX" },
  ];

  const items = useRef(Array.from({ length: 100000 }));
  const [loading, setLoading] = useState(false);
  const loadLazyTimeout = useRef();

  const onLazyLoad = (event) => {
    console.log("event", event);
    setLoading(true);

    if (loadLazyTimeout.current) {
      clearTimeout(loadLazyTimeout.current);
    }

    //imitate delay of a backend call
    loadLazyTimeout.current = setTimeout(() => {
      const { first, last } = event;
      const _items = [...items.current];

      for (let i = first; i < last; i++) {
        _items[i] = { label: `Customer #${i}`, value: i };
      }

      items.current = _items;
      setLoading(false);
    }, Math.random() * 1000 + 250);
  };

  return (
    <>
      <div className="h-full max-h-full">
        <Dialog
          visible={visible}
          modal
          header={headerElement}
          footer={footerContent}
          // style={{ width: "50rem" }}
          onHide={() => setVisible(false)}
          className="w-8"
        >
          <div>
            <OpenLayersMap />
          </div>
        </Dialog>
        {/* <div className="flex flex-wrap gap-5 align-items-center justify-content-center mt-2">
        <div className="flex-auto">
          <span className="p-float-label">
            <InputText
              id="customer"
              value={value1}
              className="w-full"
              onChange={(e) => setValue1(e.target.value)}
            />
            <label htmlFor="customer">Customer</label>
          </span>
        </div>
        <div className="flex-auto">
          <span className="p-float-label">
            <InputText
              id="reference"
              value={value2}
              className="w-full"
              onChange={(e) => setValue2(e.target.value)}
            />
            <label htmlFor="reference">Reference</label>
          </span>
        </div>
        <div className="flex-auto">
          <span className="p-float-label">
            <InputText
              id="isa"
              value={value3}
              className="w-full"
              onChange={(e) => setValue3(e.target.value)}
            />
            <label htmlFor="isa">ISA Client Code</label>
          </span>
        </div>
        <div className="flex-auto ">
          <span className="p-float-label">
            <InputText
              id="refcode"
              value={value4}
              className="w-full"
              onChange={(e) => setValue4(e.target.value)}
            />
            <label htmlFor="refcode">24/7 Reference Code</label>
          </span>
        </div>
      </div> */}

        {/* <Divider /> */}
        <div className="grid ">
          <div className="col-4 mt-2">
            <span className="p-float-label">
              {/* <Dropdown
                id="customer"
                value={value1}
                className="w-full border-2"
                onChange={(e) => setValue1(e.target.value)}
                required
              /> */}
              {/* <Dropdown
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.value)}
                options={items}
                placeholder="Select Item"
                className="w-full "
                id="customer"
                virtualScrollerOptions={{
                  lazy: true,
                  itemSize: 38,
                  showLoader: true,
                  loading: loading,
                  delay: 250,
                }}
              /> */}
              {/* <Dropdown
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.value)}
                options={items}
                placeholder="Select Item"
                className="w-full"
                onOptionSelect={handleLazyLoad}
                virtualScrollerOptions={{
                  lazy: true,
                  itemSize: 38,
                  showLoader: true,
                  loading: loading,
                  delay: 250,
                }}
              /> */}
              {/* <Dropdown
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.value)}
                options={items}
                placeholder="Select Item"
                className="w-full "
                virtualScrollerOptions={{ lazy: true, itemSize: 38, showLoader: true, loading: loading, delay: 250 }}
            /> */}
              <Dropdown
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.value)}
                options={items.current}
                placeholder="Select Item"
                className="w-full border-2"
                virtualScrollerOptions={{
                  lazy: true,
                  onLazyLoad: onLazyLoad,
                  itemSize: 38,
                  showLoader: true,
                  loading: loading,
                  delay: 250,
                }}
              />
              <label htmlFor="customer">
                Customer <span className="text-red-500">*</span>
              </label>
            </span>
          </div>
          <div className="col-4 mt-2">
            <span className="p-float-label ">
              <InputText
                id="reference"
                aria-describedby="reference-help"
                value={value2}
                className="w-full border-2"
                // onChange={(e) => setValue2(e.target.value)}
                onChange={handleChange}
                maxLength={maxLength}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label htmlFor="reference">Reference</label>

            </span>
            {(isFocused || value2.trim() !== '')  && (
              <small id="reference-help" className="absolute mt-1">
                {charCount}/{maxLength}
              </small>
            )}
          </div>
          <div className="col-4 mt-2">
            <span className="p-float-label">
              <InputText
                id="isa"
                value={value3}
                className="w-full border-2"
                onChange={(e) => setValue3(e.target.value)}
              />
              <label htmlFor="isa">ISA Client Code</label>
            </span>
          </div>
          <div className="col-4 mt-3">
            <span className="p-float-label">
              <InputText
                id="refcode"
                value={value4}
                className="w-full border-2"
                onChange={(e) => setValue4(e.target.value)}
              />
              <label htmlFor="refcode">24/7 Reference Code</label>
            </span>
          </div>
          <div className="col-4 mt-3">
            <span className="p-float-label">
              <InputText
                id="locoderef"
                value={locatCodeRef}
                className="w-full border-2"
                onChange={(e) => setLocaCodeRef(e.target.value)}
              />
              <label htmlFor="locoderef">Location Code Ref.</label>
            </span>
          </div>
        </div>
        <Divider />
        <div className="grid">
          <div className="col-4 mt-2">
            {/* <span className="p-float-label p-input-icon-left">
            <i className="pi pi-map-marker w-full" />
            <InputText
              id="address"
              value={value4}
              className="w-full border-2"
              onChange={(e) => setValue4(e.target.value)}
            />
            <label htmlFor="address">Address</label>
          </span> */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon bg-primary">
                <i className="pi pi-map-marker text-lg"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  id="address"
                  type="text"
                  value={value5}
                  onChange={(e) => setValue5(e.target.value)}
                  onClick={() => setVisible(true)}
                  className="w-full border-2"
                />
                <label htmlFor="address">Address</label>
              </span>
            </div>
          </div>

          <div className="col-4 mt-2">
            <span className="p-float-label">
              <Dropdown
                id="customer"
                //   value={value1}
                className="w-full border-2"
                onChange={(e) => setSelectedCountry(e.value)}
                value={selectedCountry}
                options={country}
                optionLabel="name"
                showClear
              />
              <label htmlFor="customer">Province/State</label>
            </span>
          </div>
          <div className="col-4 mt-2">
            <span className="p-float-label">
              <Dropdown
                id="customer"
                className={`w-full border-2 ${selectedCountry === null || selectedCountry === undefined
                    ? "surface-300"
                    : ""
                  }`}
                onChange={(e) => setSelectedCity(e.value)}
                disabled={
                  selectedCountry === null || selectedCountry === undefined
                }
                value={selectedCity}
                options={city}
                optionLabel="name"
                showClear={selectedCity !== null && selectedCity !== undefined}
              />
              <label
                htmlFor="customer"
                className={`${selectedCountry === null || selectedCountry === undefined
                    ? "text-400"
                    : ""
                  }`}
              >
                District/City
              </label>
            </span>
          </div>
          <div className="col-4 mt-2">
            <span className="p-float-label">
              <InputText
                id="locationName"
                value={locationName}
                className="w-full border-2"
                onChange={(e) => setLocationName(e.target.value)}
              />
              <label htmlFor="locationName">Location Name</label>
            </span>
          </div>
          <div className="col-4 mt-2">
            <span className="p-float-label">
              <InputNumber
                id="poscode"
                value={postalCode}
                className="w-full "
                inputClassName="border-2"
                onValueChange={(e) => setPostalCode(e.target.value)}
                useGrouping={false}
                maxLength={5}
              />
              <label htmlFor="poscode">Postal Code</label>
            </span>
          </div>
        </div>
        <Divider />
        <div className="grid">
          <div className="col-4 mt-2">
            <span className="p-float-label">
              <InputText
                id="Latitude"
                value={value6}
                className="w-full border-2"
                onChange={(e) => setValue6(e.target.value)}
              />
              <label htmlFor="Latitude">Latitude</label>
            </span>
          </div>
          <div className="col-4 mt-2">
            <span className="p-float-label">
              <InputText
                id="longitude"
                value={value7}
                className="w-full border-2"
                onChange={(e) => setValue7(e.target.value)}
              />
              <label htmlFor="longitude">Longitude</label>
            </span>
          </div>
          <div className="col-4 mt-2">
            <span className="p-float-label" id="calendar-detail">
              <Calendar
                value={dates2}
                onChange={(e) => setDates2(e.value)}
                selectionMode="range"
                readOnlyInput
                showIcon
                className="w-full "
                inputId="birth_date2"
                showButtonBar
              />
              <label disabled htmlFor="customer">
                Start-End Date
              </label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
