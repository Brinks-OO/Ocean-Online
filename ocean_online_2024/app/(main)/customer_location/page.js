"use client";
import NavigationBar from "./tabMenu";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { TabView, TabPanel } from 'primereact/tabview';
import DetailTab from './detailTab'

export default function Page() {
  const items = [{ label: "Customer Location" }, { label: "New" }];
  const home = { label: "Home", url: "/home" };
  return (
    <>
      <div>
        <NavigationBar />
        <div className="card" style={{ "backgroundColor": "none" }}>
          <BreadCrumb
            model={items}
            home={home}
            className="border-noround border-round-top"
          />
          <div className="p-0 flex border-200 border-1 gap-2 py-1 px-1">
              <Button className="" size="small">Save</Button>
              <Button className="" size="small">Save & New</Button>
              <Button className="" size="small">Save & Copy</Button>
              <Button className="" size="small">Save & Close</Button>
              <Button className="surface-400" size="small"><i className="pi pi-times pr-2" />Close</Button>
            </div>
          <div className="  border-200 border-1 border-top-none border-noround border-round-bottom">
          <TabView>
                <TabPanel header="Detail">
                    <DetailTab />
                </TabPanel>
                <TabPanel header="Site Handle">
                </TabPanel>
                <TabPanel header="Additional Service">
                </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </>
  );
}
