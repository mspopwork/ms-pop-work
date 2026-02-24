import React, { useState } from "react";
import "../Style/gallery.css";

/* ================= BALCONY ================= */
import balcony1 from "../Assets/balconyImages/mspopwork-nagpur 00001.jpg";
import balcony2 from "../Assets/balconyImages/mspopwork-nagpur 00002.jpg";
import balcony3 from "../Assets/balconyImages/mspopwork-nagpur 00003.jpg";
import balcony4 from "../Assets/balconyImages/mspopwork-nagpur 00004.jpg";
import balcony5 from "../Assets/balconyImages/mspopwork-nagpur 00005.jpg";
import balcony6 from "../Assets/balconyImages/mspopwork-nagpur 00006.jpg";
import balcony7 from "../Assets/balconyImages/mspopwork-nagpur 00007.jpg";
import balcony8 from "../Assets/balconyImages/mspopwork-nagpur 00008.jpg";
import balcony9 from "../Assets/balconyImages/mspopwork-nagpur 00009.jpg";
import balcony10 from "../Assets/balconyImages/mspopwork-nagpur 00010.jpg";
import balcony11 from "../Assets/balconyImages/mspopwork-nagpur 00011.jpg";
import balcony12 from "../Assets/balconyImages/mspopwork-nagpur 00012.jpg";
import balcony13 from "../Assets/balconyImages/mspopwork-nagpur 00013.jpg";
import balcony14 from "../Assets/balconyImages/mspopwork-nagpur 00014.jpg";
import balcony15 from "../Assets/balconyImages/mspopwork-nagpur 00015.jpg";
import balcony16 from "../Assets/balconyImages/mspopwork-nagpur 00016.jpg";
import balcony17 from "../Assets/balconyImages/mspopwork-nagpur 00017.jpg";
import balcony18 from "../Assets/balconyImages/mspopwork-nagpur 00018.jpg";
import balcony19 from "../Assets/balconyImages/mspopwork-nagpur 00019.jpg";
import balcony20 from "../Assets/balconyImages/mspopwork-nagpur 00020.jpg";
import balcony21 from "../Assets/balconyImages/mspopwork-nagpur 00021.jpg";
import balcony22 from "../Assets/balconyImages/mspopwork-nagpur 00022.jpg";
import balcony23 from "../Assets/balconyImages/mspopwork-nagpur 00023.jpg";

/* ================= BEDROOM ================= */
import Bedroom1 from "../Assets/BedRoom/mspopwork-nagpur 01.jpg";
import Bedroom2 from "../Assets/BedRoom/mspopwork-nagpur 02.jpg";
import Bedroom3 from "../Assets/BedRoom/mspopwork-nagpur 03.jpg";
import Bedroom4 from "../Assets/BedRoom/mspopwork-nagpur 04.jpg";
import Bedroom5 from "../Assets/BedRoom/mspopwork-nagpur 05.jpg";
import Bedroom6 from "../Assets/BedRoom/mspopwork-nagpur 06.jpg";
import Bedroom7 from "../Assets/BedRoom/mspopwork-nagpur 07.jpg";
import Bedroom8 from "../Assets/BedRoom/mspopwork-nagpur 08.jpg";
import Bedroom9 from "../Assets/BedRoom/mspopwork-nagpur 09.jpg";
import Bedroom10 from "../Assets/BedRoom/mspopwork-nagpur 10.jpg";
import Bedroom11 from "../Assets/BedRoom/mspopwork-nagpur 11.jpg";
import Bedroom12 from "../Assets/BedRoom/mspopwork-nagpur 12.jpg";
import Bedroom13 from "../Assets/BedRoom/mspopwork-nagpur 13.jpg";
import Bedroom14 from "../Assets/BedRoom/mspopwork-nagpur 14.jpg";
import Bedroom15 from "../Assets/BedRoom/mspopwork-nagpur 15.jpg";
import Bedroom16 from "../Assets/BedRoom/mspopwork-nagpur 16.jpg";
import Bedroom17 from "../Assets/BedRoom/mspopwork-nagpur 17.jpg";
import Bedroom18 from "../Assets/BedRoom/mspopwork-nagpur 18.jpg";
import Bedroom19 from "../Assets/BedRoom/mspopwork-nagpur 19.jpg";
import Bedroom20 from "../Assets/BedRoom/mspopwork-nagpur 20.jpg";
import Bedroom21 from "../Assets/BedRoom/mspopwork-nagpur 21.jpg";
import Bedroom22 from "../Assets/BedRoom/mspopwork-nagpur 22.jpg";
import Bedroom23 from "../Assets/BedRoom/mspopwork-nagpur 23.jpg";
import Bedroom24 from "../Assets/BedRoom/mspopwork-nagpur 24.jpg";
import Bedroom25 from "../Assets/BedRoom/mspopwork-nagpur 25.jpg";
import Bedroom26 from "../Assets/BedRoom/mspopwork-nagpur 26.jpg";

/* ================= HALL ================= */
import Halldesign1 from "../Assets/Hall Design/mspopwork-nagpur 801.jpg";
import Halldesign2 from "../Assets/Hall Design/mspopwork-nagpur 802.jpg";
import Halldesign3 from "../Assets/Hall Design/mspopwork-nagpur 803.jpg";
import Halldesign4 from "../Assets/Hall Design/mspopwork-nagpur 804.jpg";
import Halldesign5 from "../Assets/Hall Design/mspopwork-nagpur 805.jpg";
import Halldesign6 from "../Assets/Hall Design/mspopwork-nagpur 806.jpg";
import Halldesign7 from "../Assets/Hall Design/mspopwork-nagpur 807.jpg";
import Halldesign8 from "../Assets/Hall Design/mspopwork-nagpur 808.jpg";
import Halldesign9 from "../Assets/Hall Design/mspopwork-nagpur 809.jpg";
import Halldesign10 from "../Assets/Hall Design/mspopwork-nagpur 810.jpg";
import Halldesign11 from "../Assets/Hall Design/mspopwork-nagpur 811.jpg";
import Halldesign12 from "../Assets/Hall Design/mspopwork-nagpur 812.jpg";
import Halldesign13 from "../Assets/Hall Design/mspopwork-nagpur 813.jpg";
import Halldesign14 from "../Assets/Hall Design/mspopwork-nagpur 814.jpg";
import Halldesign15 from "../Assets/Hall Design/mspopwork-nagpur 815.jpg";
import Halldesign16 from "../Assets/Hall Design/mspopwork-nagpur 816.jpg";
import Halldesign17 from "../Assets/Hall Design/mspopwork-nagpur 817.jpg";
import Halldesign18 from "../Assets/Hall Design/mspopwork-nagpur 818.jpg";
import Halldesign19 from "../Assets/Hall Design/mspopwork-nagpur 819.jpg";
import Halldesign20 from "../Assets/Hall Design/mspopwork-nagpur 820.jpg";
import Halldesign21 from "../Assets/Hall Design/mspopwork-nagpur 821.jpg";
import Halldesign22 from "../Assets/Hall Design/mspopwork-nagpur 822.jpg";
import Halldesign23 from "../Assets/Hall Design/mspopwork-nagpur 823.jpg";
import Halldesign24 from "../Assets/Hall Design/mspopwork-nagpur 824.jpg";
import Halldesign25 from "../Assets/Hall Design/mspopwork-nagpur 825.jpg";
import Halldesign26 from "../Assets/Hall Design/mspopwork-nagpur 826.jpg";
import Halldesign27 from "../Assets/Hall Design/mspopwork-nagpur 827.jpg";

/* ================= KITCHEN ================= */
import KitchenDesign1 from "../Assets/KitchenDesign/mspopwork-nagpur01.jpg";
import KitchenDesign2 from "../Assets/KitchenDesign/mspopwork-nagpur02.jpg";
import KitchenDesign3 from "../Assets/KitchenDesign/mspopwork-nagpur03.jpg";
import KitchenDesign4 from "../Assets/KitchenDesign/mspopwork-nagpur04.jpg";
import KitchenDesign5 from "../Assets/KitchenDesign/mspopwork-nagpur05.jpg";
import KitchenDesign6 from "../Assets/KitchenDesign/mspopwork-nagpur06.jpg";
import KitchenDesign7 from "../Assets/KitchenDesign/mspopwork-nagpur07.jpg";
import KitchenDesign8 from "../Assets/KitchenDesign/mspopwork-nagpur08.jpg";
import KitchenDesign9 from "../Assets/KitchenDesign/mspopwork-nagpur09.jpg";
import KitchenDesign10 from "../Assets/KitchenDesign/mspopwork-nagpur10.jpg";
import KitchenDesign11 from "../Assets/KitchenDesign/mspopwork-nagpur11.jpg";
import KitchenDesign12 from "../Assets/KitchenDesign/mspopwork-nagpur12.jpg";
import KitchenDesign13 from "../Assets/KitchenDesign/mspopwork-nagpur13.jpg";
import KitchenDesign14 from "../Assets/KitchenDesign/mspopwork-nagpur14.jpg";
import KitchenDesign15 from "../Assets/KitchenDesign/mspopwork-nagpur15.jpg";
import KitchenDesign16 from "../Assets/KitchenDesign/mspopwork-nagpur16.jpg";
import KitchenDesign17 from "../Assets/KitchenDesign/mspopwork-nagpur17.jpg";

/* ================= LIVING ROOM ================= */
import Livingdesign1 from "../Assets/LivingRoom/mspopwork-nagpur 201.jpg";
import Livingdesign2 from "../Assets/LivingRoom/mspopwork-nagpur 202.jpg";
import Livingdesign3 from "../Assets/LivingRoom/mspopwork-nagpur 203.jpg";
import Livingdesign4 from "../Assets/LivingRoom/mspopwork-nagpur 204.jpg";
import Livingdesign5 from "../Assets/LivingRoom/mspopwork-nagpur 205.jpg";
import Livingdesign6 from "../Assets/LivingRoom/mspopwork-nagpur 206.jpg";
import Livingdesign7 from "../Assets/LivingRoom/mspopwork-nagpur 207.jpg";
import Livingdesign8 from "../Assets/LivingRoom/mspopwork-nagpur 208.jpg";
import Livingdesign9 from "../Assets/LivingRoom/mspopwork-nagpur 209.jpg";
import Livingdesign10 from "../Assets/LivingRoom/mspopwork-nagpur 210.jpg";
import Livingdesign11 from "../Assets/LivingRoom/mspopwork-nagpur 211.jpg";
import Livingdesign12 from "../Assets/LivingRoom/mspopwork-nagpur 212.jpg";
import Livingdesign13 from "../Assets/LivingRoom/mspopwork-nagpur 213.jpg";
import Livingdesign14 from "../Assets/LivingRoom/mspopwork-nagpur 214.jpg";
import Livingdesign15 from "../Assets/LivingRoom/mspopwork-nagpur 215.jpg";
import Livingdesign16 from "../Assets/LivingRoom/mspopwork-nagpur 216.jpg";

/* ================= PROFILE LIGHT ================= */
import ProfileDesign1 from "../Assets/ProfileLight/mspopwork-nagpur301.jpg";
import ProfileDesign2 from "../Assets/ProfileLight/mspopwork-nagpur302.jpg";
import ProfileDesign3 from "../Assets/ProfileLight/mspopwork-nagpur303.jpg";
import ProfileDesign4 from "../Assets/ProfileLight/mspopwork-nagpur304.jpg";
import ProfileDesign5 from "../Assets/ProfileLight/mspopwork-nagpur305.jpg";
import ProfileDesign6 from "../Assets/ProfileLight/mspopwork-nagpur306.jpg";
import ProfileDesign7 from "../Assets/ProfileLight/mspopwork-nagpur307.jpg";
import ProfileDesign8 from "../Assets/ProfileLight/mspopwork-nagpur308.jpg";
import ProfileDesign9 from "../Assets/ProfileLight/mspopwork-nagpur309.jpg";
import ProfileDesign10 from "../Assets/ProfileLight/mspopwork-nagpur310.jpg";
import ProfileDesign11 from "../Assets/ProfileLight/mspopwork-nagpur311.jpg";
import ProfileDesign12 from "../Assets/ProfileLight/mspopwork-nagpur312.jpg";
import ProfileDesign13 from "../Assets/ProfileLight/mspopwork-nagpur313.jpg";
import ProfileDesign14 from "../Assets/ProfileLight/mspopwork-nagpur314.jpg";
import ProfileDesign15 from "../Assets/ProfileLight/mspopwork-nagpur315.jpg";
import ProfileDesign16 from "../Assets/ProfileLight/mspopwork-nagpur316.jpg";
import ProfileDesign17 from "../Assets/ProfileLight/mspopwork-nagpur317.jpg";
import ProfileDesign18 from "../Assets/ProfileLight/mspopwork-nagpur318.jpg";
import ProfileDesign19 from "../Assets/ProfileLight/mspopwork-nagpur319.jpg";
import ProfileDesign20 from "../Assets/ProfileLight/mspopwork-nagpur320.jpg";

/* ================= PVC CEILING ================= */
import PvcCelling1 from "../Assets/PvcCelling/mspopwork-nagpur401.jpg";
import PvcCelling2 from "../Assets/PvcCelling/mspopwork-nagpur402.jpg";
import PvcCelling3 from "../Assets/PvcCelling/mspopwork-nagpur403.jpg";
import PvcCelling4 from "../Assets/PvcCelling/mspopwork-nagpur404.jpg";
import PvcCelling5 from "../Assets/PvcCelling/mspopwork-nagpur405.jpg";
import PvcCelling6 from "../Assets/PvcCelling/mspopwork-nagpur406.jpg";
import PvcCelling7 from "../Assets/PvcCelling/mspopwork-nagpur407.jpg";
import PvcCelling8 from "../Assets/PvcCelling/mspopwork-nagpur408.jpg";
import PvcCelling9 from "../Assets/PvcCelling/mspopwork-nagpur409.jpg";
import PvcCelling10 from "../Assets/PvcCelling/mspopwork-nagpur410.jpg";
import PvcCelling11 from "../Assets/PvcCelling/mspopwork-nagpur411.jpg";
import PvcCelling12 from "../Assets/PvcCelling/mspopwork-nagpur412.jpg";
import PvcCelling13 from "../Assets/PvcCelling/mspopwork-nagpur413.jpg";
import PvcCelling14 from "../Assets/PvcCelling/mspopwork-nagpur414.jpg";
import PvcCelling15 from "../Assets/PvcCelling/mspopwork-nagpur415.jpg";
import PvcCelling16 from "../Assets/PvcCelling/mspopwork-nagpur416.jpg";
import PvcCelling17 from "../Assets/PvcCelling/mspopwork-nagpur417.jpg";
import PvcCelling18 from "../Assets/PvcCelling/mspopwork-nagpur418.jpg";
import PvcCelling19 from "../Assets/PvcCelling/mspopwork-nagpur419.jpg";
import PvcCelling20 from "../Assets/PvcCelling/mspopwork-nagpur420.jpg";

/* ================= T-GRID ================= */
import TGridImages1 from "../Assets/TGrid/mspopwork-nagpur501.jpg";
import TGridImages2 from "../Assets/TGrid/mspopwork-nagpur502.jpg";
import TGridImages3 from "../Assets/TGrid/mspopwork-nagpur503.jpg";
import TGridImages4 from "../Assets/TGrid/mspopwork-nagpur504.jpg";
import TGridImages5 from "../Assets/TGrid/mspopwork-nagpur505.jpg";
import TGridImages6 from "../Assets/TGrid/mspopwork-nagpur506.jpg";
import TGridImages7 from "../Assets/TGrid/mspopwork-nagpur507.jpg";
import TGridImages8 from "../Assets/TGrid/mspopwork-nagpur508.jpg";
import TGridImages9 from "../Assets/TGrid/mspopwork-nagpur509.jpg";
import TGridImages10 from "../Assets/TGrid/mspopwork-nagpur510.jpg";
import TGridImages11 from "../Assets/TGrid/mspopwork-nagpur511.jpg";
import TGridImages12 from "../Assets/TGrid/mspopwork-nagpur512.jpg";
import TGridImages13 from "../Assets/TGrid/mspopwork-nagpur513.jpg";
import TGridImages14 from "../Assets/TGrid/mspopwork-nagpur514.jpg";
import TGridImages15 from "../Assets/TGrid/mspopwork-nagpur515.jpg";
import TGridImages16 from "../Assets/TGrid/mspopwork-nagpur516.jpg";

/* ================= TV UNIT ================= */
import TVunit1 from "../Assets/Tvunit/mspopwork-nagpur601.jpg";
import TVunit2 from "../Assets/Tvunit/mspopwork-nagpur602.jpg";
import TVunit3 from "../Assets/Tvunit/mspopwork-nagpur603.jpg";
import TVunit4 from "../Assets/Tvunit/mspopwork-nagpur604.jpg";
import TVunit5 from "../Assets/Tvunit/mspopwork-nagpur605.jpg";
import TVunit6 from "../Assets/Tvunit/mspopwork-nagpur606.jpg";
import TVunit7 from "../Assets/Tvunit/mspopwork-nagpur607.jpg";
import TVunit8 from "../Assets/Tvunit/mspopwork-nagpur608.jpg";
import TVunit9 from "../Assets/Tvunit/mspopwork-nagpur609.jpg";
import TVunit10 from "../Assets/Tvunit/mspopwork-nagpur610.jpg";
import TVunit11 from "../Assets/Tvunit/mspopwork-nagpur611.jpg";
import TVunit12 from "../Assets/Tvunit/mspopwork-nagpur612.jpg";
import TVunit13 from "../Assets/Tvunit/mspopwork-nagpur613.jpg";
import TVunit14 from "../Assets/Tvunit/mspopwork-nagpur614.jpg";
import TVunit15 from "../Assets/Tvunit/mspopwork-nagpur615.jpg";
import TVunit16 from "../Assets/Tvunit/mspopwork-nagpur616.jpg";
import TVunit17 from "../Assets/Tvunit/mspopwork-nagpur617.jpg";
import TVunit18 from "../Assets/Tvunit/mspopwork-nagpur618.jpg";
import TVunit19 from "../Assets/Tvunit/mspopwork-nagpur619.jpg";
import TVunit20 from "../Assets/Tvunit/mspopwork-nagpur620.jpg";

/* ================= WALL DESIGN ================= */
import WallDesign1 from "../Assets/WallDesign/mspopwork-nagpur 701.jpg";
import WallDesign2 from "../Assets/WallDesign/mspopwork-nagpur 702.jpg";
import WallDesign3 from "../Assets/WallDesign/mspopwork-nagpur 703.jpg";
import WallDesign4 from "../Assets/WallDesign/mspopwork-nagpur 704.jpg";
import WallDesign5 from "../Assets/WallDesign/mspopwork-nagpur 705.jpg";
import WallDesign6 from "../Assets/WallDesign/mspopwork-nagpur 706.jpg";
import WallDesign7 from "../Assets/WallDesign/mspopwork-nagpur 707.jpg";
import WallDesign8 from "../Assets/WallDesign/mspopwork-nagpur 708.jpg";
import WallDesign9 from "../Assets/WallDesign/mspopwork-nagpur 709.jpg";
import WallDesign10 from "../Assets/WallDesign/mspopwork-nagpur 710.jpg";
import WallDesign11 from "../Assets/WallDesign/mspopwork-nagpur 711.jpg";
import WallDesign12 from "../Assets/WallDesign/mspopwork-nagpur 712.jpg";
import WallDesign13 from "../Assets/WallDesign/mspopwork-nagpur 713.jpg";
import WallDesign14 from "../Assets/WallDesign/mspopwork-nagpur 714.jpg";
import WallDesign15 from "../Assets/WallDesign/mspopwork-nagpur 715.jpg";
import WallDesign16 from "../Assets/WallDesign/mspopwork-nagpur 716.jpg";
import WallDesign17 from "../Assets/WallDesign/mspopwork-nagpur 717.jpg";
import WallDesign18 from "../Assets/WallDesign/mspopwork-nagpur 718.jpg";
import WallDesign19 from "../Assets/WallDesign/mspopwork-nagpur 719.jpg";
import WallDesign20 from "../Assets/WallDesign/mspopwork-nagpur 720.jpg";
import WallDesign21 from "../Assets/WallDesign/mspopwork-nagpur 721.jpg";
import WallDesign22 from "../Assets/WallDesign/mspopwork-nagpur 722.jpg";
import WallDesign23 from "../Assets/WallDesign/mspopwork-nagpur 723.jpg";
import WallDesign24 from "../Assets/WallDesign/mspopwork-nagpur 724.jpg";

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // Bedroom
    ...[
      Bedroom1,
      Bedroom2,
      Bedroom3,
      Bedroom4,
      Bedroom5,
      Bedroom6,
      Bedroom7,
      Bedroom8,
      Bedroom9,
      Bedroom10,
      Bedroom11,
      Bedroom12,
      Bedroom13,
      Bedroom14,
      Bedroom15,
      Bedroom16,
      Bedroom17,
      Bedroom18,
      Bedroom19,
      Bedroom20,
      Bedroom21,
      Bedroom22,
      Bedroom23,
      Bedroom24,
      Bedroom25,
      Bedroom26,
    ].map((img) => ({ src: img, category: "bedroom" })),

    // Balcony
    ...[
      balcony1,
      balcony2,
      balcony3,
      balcony4,
      balcony5,
      balcony6,
      balcony7,
      balcony8,
      balcony9,
      balcony10,
      balcony11,
      balcony12,
      balcony13,
      balcony14,
      balcony15,
      balcony16,
      balcony17,
      balcony18,
      balcony19,
      balcony20,
      balcony21,
      balcony22,
      balcony23,
    ].map((img) => ({ src: img, category: "balcony" })),

    // Hall
    ...[
      Halldesign1,
      Halldesign2,
      Halldesign3,
      Halldesign4,
      Halldesign5,
      Halldesign6,
      Halldesign7,
      Halldesign8,
      Halldesign9,
      Halldesign10,
      Halldesign11,
      Halldesign12,
      Halldesign13,
      Halldesign14,
      Halldesign15,
      Halldesign16,
      Halldesign17,
      Halldesign18,
      Halldesign19,
      Halldesign20,
      Halldesign21,
      Halldesign22,
      Halldesign23,
      Halldesign24,
      Halldesign25,
      Halldesign26,
      Halldesign27,
    ].map((img) => ({ src: img, category: "hall" })),

    // Kitchen
    ...[
      KitchenDesign1,
      KitchenDesign2,
      KitchenDesign3,
      KitchenDesign4,
      KitchenDesign5,
      KitchenDesign6,
      KitchenDesign7,
      KitchenDesign8,
      KitchenDesign9,
      KitchenDesign10,
      KitchenDesign11,
      KitchenDesign12,
      KitchenDesign13,
      KitchenDesign14,
      KitchenDesign15,
      KitchenDesign16,
      KitchenDesign17,
    ].map((img) => ({ src: img, category: "kitchen" })),

    // Living Room
    ...[
      Livingdesign1,
      Livingdesign2,
      Livingdesign3,
      Livingdesign4,
      Livingdesign5,
      Livingdesign6,
      Livingdesign7,
      Livingdesign8,
      Livingdesign9,
      Livingdesign10,
      Livingdesign11,
      Livingdesign12,
      Livingdesign13,
      Livingdesign14,
      Livingdesign15,
      Livingdesign16,
    ].map((img) => ({ src: img, category: "living" })),

    // Profile Light
    ...[
      ProfileDesign1,
      ProfileDesign2,
      ProfileDesign3,
      ProfileDesign4,
      ProfileDesign5,
      ProfileDesign6,
      ProfileDesign7,
      ProfileDesign8,
      ProfileDesign9,
      ProfileDesign10,
      ProfileDesign11,
      ProfileDesign12,
      ProfileDesign13,
      ProfileDesign14,
      ProfileDesign15,
      ProfileDesign16,
      ProfileDesign17,
      ProfileDesign18,
      ProfileDesign19,
      ProfileDesign20,
    ].map((img) => ({ src: img, category: "profile" })),

    // PVC Ceiling
    ...[
      PvcCelling1,
      PvcCelling2,
      PvcCelling3,
      PvcCelling4,
      PvcCelling5,
      PvcCelling6,
      PvcCelling7,
      PvcCelling8,
      PvcCelling9,
      PvcCelling10,
      PvcCelling11,
      PvcCelling12,
      PvcCelling13,
      PvcCelling14,
      PvcCelling15,
      PvcCelling16,
      PvcCelling17,
      PvcCelling18,
      PvcCelling19,
      PvcCelling20,
    ].map((img) => ({ src: img, category: "pvc" })),

    // T-Grid
    ...[
      TGridImages1,
      TGridImages2,
      TGridImages3,
      TGridImages4,
      TGridImages5,
      TGridImages6,
      TGridImages7,
      TGridImages8,
      TGridImages9,
      TGridImages10,
      TGridImages11,
      TGridImages12,
      TGridImages13,
      TGridImages14,
      TGridImages15,
      TGridImages16,
    ].map((img) => ({ src: img, category: "tgrid" })),

    // TV Unit
    ...[
      TVunit1,
      TVunit2,
      TVunit3,
      TVunit4,
      TVunit5,
      TVunit6,
      TVunit7,
      TVunit8,
      TVunit9,
      TVunit10,
      TVunit11,
      TVunit12,
      TVunit13,
      TVunit14,
      TVunit15,
      TVunit16,
      TVunit17,
      TVunit18,
      TVunit19,
      TVunit20,
    ].map((img) => ({ src: img, category: "tvunit" })),

    // Wall Design
    ...[
      WallDesign1,
      WallDesign2,
      WallDesign3,
      WallDesign4,
      WallDesign5,
      WallDesign6,
      WallDesign7,
      WallDesign8,
      WallDesign9,
      WallDesign10,
      WallDesign11,
      WallDesign12,
      WallDesign13,
      WallDesign14,
      WallDesign15,
      WallDesign16,
      WallDesign17,
      WallDesign18,
      WallDesign19,
      WallDesign20,
      WallDesign21,
      WallDesign22,
      WallDesign23,
      WallDesign24,
    ].map((img) => ({ src: img, category: "wall" })),
  ];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section className="gallerySection">
      <h2 className="galleryTitle">Our Celling Designs</h2>

      <div className="galleryFilters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "balcony" ? "active" : ""}
          onClick={() => setFilter("balcony")}
        >
          Balcony
        </button>
        <button
          className={filter === "bedroom" ? "active" : ""}
          onClick={() => setFilter("bedroom")}
        >
          Bedroom
        </button>
        <button
          className={filter === "hall" ? "active" : ""}
          onClick={() => setFilter("hall")}
        >
          Hall
        </button>
        <button
          className={filter === "kitchen" ? "active" : ""}
          onClick={() => setFilter("kitchen")}
        >
          Kitchen
        </button>
        <button
          className={filter === "living" ? "active" : ""}
          onClick={() => setFilter("living")}
        >
          Living Room
        </button>
        <button
          className={filter === "profile" ? "active" : ""}
          onClick={() => setFilter("profile")}
        >
          Profile Light
        </button>
        <button
          className={filter === "pvc" ? "active" : ""}
          onClick={() => setFilter("pvc")}
        >
          PVC Ceiling
        </button>
        <button
          className={filter === "tgrid" ? "active" : ""}
          onClick={() => setFilter("tgrid")}
        >
          T-Grid
        </button>
        <button
          className={filter === "tvunit" ? "active" : ""}
          onClick={() => setFilter("tvunit")}
        >
          TV Unit
        </button>
        <button
          className={filter === "wall" ? "active" : ""}
          onClick={() => setFilter("wall")}
        >
          Wall Design
        </button>
      </div>

      <div className="galleryGrid">
        {filteredImages.map((img, index) => (
          <div className="galleryItem" key={index}>
            <img
              src={img.src}
              alt={`POP Design - ${img.category}`}
              onClick={() => setSelectedImage(img.src)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="popupOverlay" onClick={() => setSelectedImage(null)}>
          <span className="closeBtn">×</span>
          <img
            src={selectedImage}
            alt="Full View"
            className="popupImage"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
