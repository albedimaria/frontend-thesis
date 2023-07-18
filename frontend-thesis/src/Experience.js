import {OrbitControls} from "@react-three/drei";
import React from "react";
import LightsAndShadows from "./components/LightsAndShadows";
import Plane from "./components/Plane.js";
import { Physics, Debug} from "@react-three/rapier";
import Spheres from "./components/Spheres";
import {NumSpheresProvider} from "./contexts/NumSpheresContext";
import {Perf} from "r3f-perf";
import {LabelsProvider} from "./contexts/LabelsContext";
import {OptionsProvider} from "./contexts/OptionsContext";
import WelcomeText from "./components/WelcomeText";
import Popup from "./components/Popup";
import {SlidersProvider} from "./contexts/SlidersContext";
import {SpherePropertiesProvider} from "./contexts/SpherePropertiesContext";


export default function Experience(){
    return <>

        <OrbitControls enableDamping={true} makeDefault={true} target={[20, 0, 0]}/>

        <Perf position={"top-left"} />

        <Physics>
            <Debug />
            <NumSpheresProvider>
                <>
                    <LabelsProvider>
                        <SlidersProvider>
                            <OptionsProvider>
                                <SpherePropertiesProvider>


                                        <WelcomeText />
                                        <Popup />
                                        <Spheres />
                                        <Plane />
                                        <LightsAndShadows />


                                </SpherePropertiesProvider>
                            </OptionsProvider>
                        </SlidersProvider>
                    </LabelsProvider>
                </>



            </NumSpheresProvider>

        </Physics>



    </>
}