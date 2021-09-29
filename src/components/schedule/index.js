import React, {useState} from 'react'
import Events from './Events.js'


import qhacksSellingPointOnejpg from "../../assets/images/selling_points/sellingPointOne.jpg"//Temp
import qhacksSellingPointTwojpg from "../../assets/images/selling_points/sellingPointTwo.jpg"//Temp
import ComingSoon from './ComingSoon.js'
import './schedule.css'


const events = [//Temp
    {
      day: "DAY 1",
      eventTitle1: "Event 1",
      imageSrc1: qhacksSellingPointOnejpg,
      imageSrc2: qhacksSellingPointTwojpg,
      eventText1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper ultrices quam eget aliquet. Proin volutpat velit vel porta posuere. Phasellus auctor facilisis tellus at viverra. Fusce sed finibus elit. Pellentesque et luctus purus, ut semper orci. Proin lobortis, dolor non euismod sodales, nisl sem ultrices arcu, sed imperdiet sem ante at arcu. Vestibulum aliquet, lacus sit amet eleifend fermentum, ex lectus imperdiet purus, nec consectetur nulla lorem ac metus. Morbi purus odio, volutpat sit amet felis et, rutrum laoreet ex. Nulla facilisi. Fusce mollis sed dui sit amet venenatis. Fusce eget diam tristique, bibendum dui in, vehicula tellus. Etiam vestibulum maximus pulvinar.",
      eventTitle2: "Event 2",
      eventText2: 
      "Integer sed maximus libero. Etiam bibendum elit risus, in suscipit eros ornare et. Phasellus ullamcorper tempor scelerisque. Vivamus eget finibus tortor. Integer ipsum leo, sodales id maximus ac, pellentesque ac justo. Aenean vitae neque sit amet nisl rutrum auctor. Quisque id tempor nunc. Vestibulum viverra mi ultricies tempor consequat. Mauris gravida magna vel elementum imperdiet. Aenean condimentum ex varius justo ultricies, ac placerat nisi auctor. Donec enim magna, pellentesque quis egestas vitae, scelerisque non lacus. Proin non libero sit amet augue consectetur molestie at nec quam. Proin a eros est. In fermentum cursus nunc, sit amet laoreet orci accumsan nec. Phasellus eget bibendum ipsum, eu pellentesque mauris."
      },
    {
      day: "DAY 2",
      eventTitle1: "Event 1",
      imageSrc1: qhacksSellingPointOnejpg,
      imageSrc2: qhacksSellingPointTwojpg,
      eventText1:
        "Vestibulum ultrices porta sapien, et eleifend ante viverra vitae. Quisque quis felis eget sapien bibendum pellentesque vel vitae tellus. Curabitur lacus erat, volutpat eget scelerisque in, rhoncus volutpat ex. Aenean tempor finibus lectus, vel ornare dolor sagittis gravida. Donec finibus imperdiet libero, vel porta erat venenatis vitae. Nulla ornare vestibulum risus a rhoncus. Nam eleifend odio id sem ultricies, maximus vulputate augue rutrum. Ut sit amet euismod metus. Mauris arcu est, euismod eget sodales eu, auctor a sem. Morbi eleifend convallis justo, in fermentum ipsum posuere id. Vestibulum euismod sapien at enim luctus, ac pulvinar neque venenatis.",
      eventTitle2: "Event 2",
      eventText2:
        "Sed eget gravida ligula. Fusce ut congue sem. Fusce tempor, lacus ut elementum efficitur, nisl sapien eleifend lectus, sit amet aliquam nibh erat eget erat. Nullam at massa tristique, molestie neque eu, cursus neque. Pellentesque aliquam blandit lacus in tristique. Pellentesque faucibus et ipsum vel luctus. Nullam facilisis ac augue ac finibus. Donec urna justo, pretium eu semper maximus, euismod non mauris. Vestibulum iaculis odio sed sapien consequat, ut blandit neque luctus. Mauris gravida accumsan lectus et aliquam. Praesent non ex turpis."
    }
  ];
  

const Schedule = () => {

    return (
        <>
           {/* <Events events = {events}/> */}
           <ComingSoon></ComingSoon>
        </>
        
    )
}

export default Schedule