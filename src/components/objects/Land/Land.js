import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import MODEL from './Pine_Tree_Tall_Bent.glb';

class Land extends Group {
    constructor() {
        // Call parent Group() constructor
        super();

        const loader = new GLTFLoader();
        // const fbxLoader = new FBXLoader();


        this.name = 'land';

        loader.load(MODEL, (gltf) => {
            this.add(gltf.scene);
        });
        // fbxLoader.load(MODEL, (object)=>{
        //     this.add(object)
        // });
    }
}

export default Land;
