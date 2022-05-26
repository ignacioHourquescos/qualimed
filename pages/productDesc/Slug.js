import Header from '/components/Header/Header';
import Footer from '/components/Footer/Footer';
import styles from "./slug.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Cards from '../../components/Ui/Cards/Cards';

const Slug = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  const description = "lorem";

  return (
    <div className={styles.contAll}>
      <Header />
        <div className={styles.title}><h1>Monitor de signos vitales</h1></div>

        <div className={styles.container}>
        <div className={styles.detail}>
            <img src="/monitorDetail.png" />
            <div className={styles.detailInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec ac. Vitae et leo duis ut diam quam. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Auctor neque vitae tempus quam pellentesque nec nam. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Odio tempor orci dapibus ultrices in iaculis nunc sed. Sit amet venenatis urna cursus eget nunc. Vitae turpis massa sed elementum tempus. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. At augue eget arcu dictum varius duis. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Duis at tellus at urna condimentum mattis. Semper risus in hendrerit gravida rutrum quisque non tellus. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Lacus vestibulum sed arcu non odio euismod lacinia. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Cursus sit amet dictum sit amet justo. In ante metus dictum at tempor.

                Vitae semper quis lectus nulla. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Sit amet luctus venenatis lectus magna fringilla. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Congue eu consequat ac felis donec et odio. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Scelerisque purus semper eget duis at tellus at urna condimentum. Pellentesque sit amet porttitor eget dolor. Nibh nisl condimentum id venenatis. Quam pellentesque nec nam aliquam sem et tortor consequat. Proin libero nunc consequat interdum varius. Enim sed faucibus turpis in eu mi. Dolor purus non enim praesent elementum facilisis leo vel.

                Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Blandit volutpat maecenas volutpat blandit. Interdum velit laoreet id donec. Viverra justo nec ultrices dui sapien eget. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Nunc sed blandit libero volutpat. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nunc id cursus metus aliquam eleifend mi in. Turpis egestas integer eget aliquet nibh. Odio tempor orci dapibus ultrices. Sed cras ornare arcu dui vivamus arcu. Quam quisque id diam vel quam elementum pulvinar. Consectetur adipiscing elit duis tristique sollicitudin nibh sit.

                Erat velit scelerisque in dictum non. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Eu tincidunt tortor aliquam nulla facilisi. Nibh sed pulvinar proin gravida hendrerit. Dictum non consectetur a erat nam at. Eget duis at tellus at. Id ornare arcu odio ut sem nulla pharetra. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Vestibulum morbi blandit cursus risus at ultrices. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Porttitor leo a diam sollicitudin. Pretium fusce id velit ut. Amet purus gravida quis blandit turpis cursus. Pretium quam vulputate dignissim suspendisse. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Auctor elit sed vulputate mi sit amet mauris commodo quis. Purus sit amet volutpat consequat.

                Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Maecenas pharetra convallis posuere morbi leo. Eget mi proin sed libero enim sed. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Semper quis lectus nulla at volutpat diam ut. Netus et malesuada fames ac turpis egestas maecenas pharetra. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Eget nunc lobortis mattis aliquam faucibus purus in massa. Libero id faucibus nisl tincidunt eget. Semper quis lectus nulla at volutpat. Sit amet dictum sit amet justo donec. Dignissim suspendisse in est ante in nibh mauris cursus. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam.

                Cras adipiscing enim eu turpis egestas pretium. Diam quis enim lobortis scelerisque fermentum dui faucibus. Libero justo laoreet sit amet cursus sit amet. Volutpat odio facilisis mauris sit amet massa vitae tortor. Cursus vitae congue mauris rhoncus aenean. Aenean sed adipiscing diam donec. Commodo ullamcorper a lacus vestibulum sed. Turpis massa tincidunt dui ut ornare lectus. Arcu cursus vitae congue mauris. Et egestas quis ipsum suspendisse ultrices. Tellus id interdum velit laoreet id donec. Quam elementum pulvinar etiam non. Nibh praesent tristique magna sit.

                Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Malesuada fames ac turpis egestas integer. Leo in vitae turpis massa sed elementum tempus egestas sed. Rhoncus dolor purus non enim praesent elementum. Elit ut aliquam purus sit amet luctus venenatis. Amet venenatis urna cursus eget nunc. Justo laoreet sit amet cursus. Nec ullamcorper sit amet risus nullam eget felis. Enim nunc faucibus a pellentesque sit amet. Odio ut sem nulla pharetra. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Augue neque gravida in fermentum. Sollicitudin aliquam ultrices sagittis orci a scelerisque. At volutpat diam ut venenatis tellus in metus vulputate. Vel risus commodo viverra maecenas accumsan. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Auctor eu augue ut lectus arcu bibendum. Eget sit amet tellus cras adipiscing enim eu. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Tortor at risus viverra adipiscing at in tellus integer.

                At erat pellentesque adipiscing commodo elit at. Mi quis hendrerit dolor magna eget est lorem. At in tellus integer feugiat scelerisque varius morbi enim nunc. Imperdiet dui accumsan sit amet nulla facilisi. Gravida quis blandit turpis cursus in hac habitasse platea. Id venenatis a condimentum vitae sapien pellentesque. Odio pellentesque diam volutpat commodo. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Bibendum ut tristique et egestas. Congue mauris rhoncus aenean vel. Viverra nibh cras pulvinar mattis. A scelerisque purus semper eget. Et ligula ullamcorper malesuada proin libero nunc. Odio facilisis mauris sit amet massa vitae tortor. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.

                Nunc consequat interdum varius sit. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. At varius vel pharetra vel turpis nunc. Quis blandit turpis cursus in hac. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Ac placerat vestibulum lectus mauris ultrices eros. Velit euismod in pellentesque massa placerat duis ultricies. Nunc mi ipsum faucibus vitae aliquet nec. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut venenatis tellus in metus vulputate eu scelerisque felis.

                Odio pellentesque diam volutpat commodo. Nullam eget felis eget nunc. Magna etiam tempor orci eu lobortis elementum. Ullamcorper malesuada proin libero nunc consequat interdum varius. Risus commodo viverra maecenas accumsan. Volutpat commodo sed egestas egestas fringilla phasellus. Id ornare arcu odio ut sem nulla. Proin sed libero enim sed faucibus turpis. Pretium quam vulputate dignissim suspendisse in est. Ornare lectus sit amet est placerat. Faucibus pulvinar elementum integer enim neque. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Auctor eu augue ut lectus arcu bibendum at varius vel. Aliquet nec ullamcorper sit amet risus nullam eget felis. Cursus risus at ultrices mi tempus imperdiet nulla. Purus sit amet volutpat consequat mauris nunc congue nisi. Euismod lacinia at quis risus sed vulputate odio ut. Tellus elementum sagittis vitae et. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Tincidunt arcu non sodales neque.

                Id venenatis a condimentum vitae. Non pulvinar neque laoreet suspendisse interdum. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Morbi tristique senectus et netus et malesuada fames ac. Id ornare arcu odio ut sem nulla pharetra diam sit. Ante in nibh mauris cursus mattis. Mattis nunc sed blandit libero volutpat sed. Eu feugiat pretium nibh ipsum consequat nisl. Pulvinar sapien et ligula ullamcorper malesuada proin. Volutpat consequat mauris nunc congue nisi. A cras semper auctor neque vitae tempus quam pellentesque. Ipsum nunc aliquet bibendum enim facilisis. At varius vel pharetra vel turpis nunc eget lorem dolor. Iaculis eu non diam phasellus.

                Aliquam etiam erat velit scelerisque in dictum. Bibendum ut tristique et egestas quis ipsum suspendisse. Auctor urna nunc id cursus metus aliquam eleifend mi. Purus ut faucibus pulvinar elementum integer enim neque. Molestie a iaculis at erat pellentesque. Ut venenatis tellus in metus vulputate. Arcu odio ut sem nulla. Duis ultricies lacus sed turpis tincidunt id. Orci eu lobortis elementum nibh tellus molestie nunc non. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Tempor orci eu lobortis elementum nibh tellus molestie. Magna etiam tempor orci eu lobortis elementum. Id aliquet risus feugiat in ante metus dictum at. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Felis eget velit aliquet sagittis id. Nunc mi ipsum faucibus vitae aliquet. Egestas congue quisque egestas diam. Ornare lectus sit amet est placerat in egestas erat imperdiet. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Placerat duis ultricies lacus sed.

                Integer feugiat scelerisque varius morbi enim nunc. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Lectus proin nibh nisl condimentum id. Egestas maecenas pharetra convallis posuere morbi leo. Varius duis at consectetur lorem donec. Commodo nulla facilisi nullam vehicula. Arcu ac tortor dignissim convallis aenean et. Condimentum vitae sapien pellentesque habitant. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Sit amet consectetur adipiscing elit ut aliquam purus. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Quis lectus nulla at volutpat diam ut venenatis tellus. Dictum non consectetur a erat nam at lectus urna duis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Ipsum dolor sit amet consectetur.

                Nisl tincidunt eget nullam non nisi. Congue eu consequat ac felis donec et odio pellentesque diam. Mi eget mauris pharetra et. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Ultricies mi quis hendrerit dolor magna eget est. Quisque non tellus orci ac auctor. In hac habitasse platea dictumst vestibulum rhoncus est. Elementum tempus egestas sed sed risus pretium quam. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Arcu cursus euismod quis viverra nibh cras pulvinar. Tristique magna sit amet purus gravida quis. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Leo urna molestie at elementum eu facilisis sed odio. Nam at lectus urna duis. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Fermentum et sollicitudin ac orci phasellus egestas tellus. In aliquam sem fringilla ut. Senectus et netus et malesuada.

                Quis auctor elit sed vulputate mi sit amet mauris. Tristique senectus et netus et. Interdum varius sit amet mattis vulputate enim nulla aliquet. Blandit cursus risus at ultrices mi tempus imperdiet. In hac habitasse platea dictumst. Accumsan in nisl nisi scelerisque eu ultrices vitae. Sagittis purus sit amet volutpat consequat mauris nunc. Mattis aliquam faucibus purus in massa tempor nec feugiat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Gravida in fermentum et sollicitudin ac orci phasellus. Volutpat diam ut venenatis tellus in metus vulputate eu. Tincidunt dui ut ornare lectus sit. Senectus et netus et malesuada fames ac. Viverra adipiscing at in tellus integer. Cum sociis natoque penatibus et magnis dis parturient montes nascetur.

                Duis ut diam quam nulla porttitor. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Morbi quis commodo odio aenean sed adipiscing diam. At augue eget arcu dictum varius duis at. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Turpis egestas pretium aenean pharetra. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Aliquet enim tortor at auctor. Nibh nisl condimentum id venenatis. Suspendisse ultrices gravida dictum fusce ut placerat orci. Aliquam etiam erat velit scelerisque in dictum non. Varius sit amet mattis vulputate.

                Varius sit amet mattis vulputate enim nulla. Curabitur gravida arcu ac tortor. Pretium quam vulputate dignissim suspendisse in est ante. Pretium vulputate sapien nec sagittis. A lacus vestibulum sed arcu non odio euismod. A diam sollicitudin tempor id. Aliquet bibendum enim facilisis gravida neque convallis a. Amet volutpat consequat mauris nunc congue nisi vitae. Eget lorem dolor sed viverra ipsum nunc aliquet. Duis tristique sollicitudin nibh sit amet. Faucibus pulvinar elementum integer enim neque volutpat ac.

                Congue quisque egestas diam in arcu cursus. Odio tempor orci dapibus ultrices in. Proin gravida hendrerit lectus a. Vitae purus faucibus ornare suspendisse sed nisi. Interdum velit laoreet id donec ultrices tincidunt arcu. Porttitor rhoncus dolor purus non enim praesent. Bibendum at varius vel pharetra. Pharetra sit amet aliquam id diam. Massa placerat duis ultricies lacus sed turpis. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Felis imperdiet proin fermentum leo vel orci porta non. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Elementum curabitur vitae nunc sed velit. Ullamcorper eget nulla facilisi etiam dignissim diam. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper.

                Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Enim nec dui nunc mattis enim ut. At tempor commodo ullamcorper a lacus vestibulum sed. At risus viverra adipiscing at. Tincidunt nunc pulvinar sapien et ligula. Sed vulputate mi sit amet mauris commodo quis. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Sagittis aliquam malesuada bibendum arcu. Massa sed elementum tempus egestas sed sed risus pretium. Nec dui nunc mattis enim ut tellus elementum sagittis. Arcu dictum varius duis at consectetur lorem donec massa sapien. Morbi tincidunt ornare massa eget egestas. Nisl vel pretium lectus quam id leo.

                Tempor nec feugiat nisl pretium fusce id velit ut tortor. Ultricies mi eget mauris pharetra et. Ultricies integer quis auctor elit sed. Non diam phasellus vestibulum lorem sed risus. Duis at consectetur lorem donec massa sapien faucibus et. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Tellus at urna condimentum mattis pellentesque. Quam quisque id diam vel quam elementum. Porta lorem mollis aliquam ut porttitor leo. Aliquam etiam erat velit scelerisque in. Turpis egestas sed tempus urna et pharetra. Dui nunc mattis enim ut tellus elementum. Faucibus et molestie ac feugiat sed lectus. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Enim sed faucibus turpis in eu mi bibendum. In eu mi bibendum neque egestas congue quisque egestas. Aliquet nec ullamcorper sit amet risus nullam.

                Duis at consectetur lorem donec massa sapien faucibus et molestie. Amet cursus sit amet dictum sit. Mi tempus imperdiet nulla malesuada. Mattis pellentesque id nibh tortor id aliquet lectus. Viverra justo nec ultrices dui sapien eget mi proin. Vulputate dignissim suspendisse in est. Ultricies tristique nulla aliquet enim tortor at. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Blandit libero volutpat sed cras ornare arcu dui vivamus. Sit amet risus nullam eget felis eget nunc lobortis. Ipsum dolor sit amet consectetur adipiscing elit ut. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ut etiam sit amet nisl purus in mollis. Est placerat in egestas erat imperdiet sed euismod nisi. Placerat in egestas erat imperdiet sed euismod nisi porta. Accumsan in nisl nisi scelerisque.

                Mattis rhoncus urna neque viverra. Suscipit adipiscing bibendum est ultricies integer. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Vel risus commodo viverra maecenas accumsan. Malesuada proin libero nunc consequat. Lorem donec massa sapien faucibus et. Vulputate dignissim suspendisse in est ante in nibh. Quis blandit turpis cursus in hac habitasse. Ornare lectus sit amet est placerat. Risus viverra adipiscing at in tellus integer. Ante metus dictum at tempor commodo ullamcorper. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Eget gravida cum sociis natoque penatibus et magnis dis. Tellus mauris a diam maecenas.

                Purus viverra accumsan in nisl. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Turpis massa tincidunt dui ut. Ornare lectus sit amet est placerat in egestas erat. Tellus orci ac auctor augue mauris. Arcu dictum varius duis at consectetur. Urna et pharetra pharetra massa massa ultricies mi quis. Elit sed vulputate mi sit amet mauris commodo quis. Ultricies tristique nulla aliquet enim tortor at auctor urna. Sed id semper risus in hendrerit gravida rutrum. Enim facilisis gravida neque convallis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Pellentesque massa placerat duis ultricies. Id aliquet lectus proin nibh nisl condimentum. Diam maecenas sed enim ut. Natoque penatibus et magnis dis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Elit scelerisque mauris pellentesque pulvinar pellentesque. Dolor sit amet consectetur adipiscing.

                Ac odio tempor orci dapibus ultrices in. Id velit ut tortor pretium viverra. Nulla aliquet enim tortor at auctor urna nunc. Ut enim blandit volutpat maecenas. Sagittis purus sit amet volutpat consequat mauris nunc congue. Consectetur purus ut faucibus pulvinar elementum. Accumsan sit amet nulla facilisi morbi. Tellus pellentesque eu tincidunt tortor aliquam. Pulvinar sapien et ligula ullamcorper malesuada. Consequat id porta nibh venenatis cras sed felis. Vitae semper quis lectus nulla at volutpat diam ut. Ut diam quam nulla porttitor massa. Odio facilisis mauris sit amet.

                Ac ut consequat semper viverra nam libero justo laoreet sit. Amet justo donec enim diam vulputate ut. Lacus vel facilisis volutpat est velit egestas dui id ornare. Purus gravida quis blandit turpis cursus. Maecenas pharetra convallis posuere morbi. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Neque ornare aenean euismod elementum nisi quis. Eget nunc lobortis mattis aliquam faucibus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Vitae congue eu consequat ac felis donec et odio pellentesque.

                Et magnis dis parturient montes nascetur ridiculus mus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Eu ultrices vitae auctor eu augue. Nisl rhoncus mattis rhoncus urna neque. Eu scelerisque felis imperdiet proin fermentum leo vel. Ac felis donec et odio pellentesque diam volutpat. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Volutpat sed cras ornare arcu dui vivamus arcu felis. Orci eu lobortis elementum nibh tellus molestie. Risus feugiat in ante metus dictum. Tortor dignissim convallis aenean et. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et.

                Interdum velit laoreet id donec ultrices tincidunt arcu. Feugiat pretium nibh ipsum consequat. Nibh sed pulvinar proin gravida hendrerit lectus a. Mi proin sed libero enim sed faucibus. Purus semper eget duis at tellus at urna condimentum. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Porta nibh venenatis cras sed felis. Quis vel eros donec ac odio tempor orci dapibus ultrices. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Pellentesque nec nam aliquam sem et tortor consequat id porta. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Cursus turpis massa tincidunt dui ut ornare lectus.

                Sit amet aliquam id diam maecenas ultricies mi. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Urna cursus eget nunc scelerisque viverra. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Enim facilisis gravida neque convallis a. Vel fringilla est ullamcorper eget nulla facilisi etiam. Amet cursus sit amet dictum sit amet justo donec. Nisi quis eleifend quam adipiscing vitae. Leo in vitae turpis massa sed elementum tempus. Ultrices in iaculis nunc sed augue lacus. Tristique risus nec feugiat in fermentum. At imperdiet dui accumsan sit. Adipiscing commodo elit at imperdiet dui accumsan. Urna et pharetra pharetra massa. Eget lorem dolor sed viverra ipsum nunc. A arcu cursus vitae congue mauris. Fringilla ut morbi tincidunt augue interdum.

                Ullamcorper velit sed ullamcorper morbi. Est ullamcorper eget nulla facilisi etiam dignissim diam. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Adipiscing elit ut aliquam purus sit. Habitant morbi tristique senectus et netus et. Ultricies tristique nulla aliquet enim tortor. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Sed blandit libero volutpat sed cras ornare. Quisque egestas diam in arcu. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Velit egestas dui id ornare arcu. Semper eget duis at tellus at urna condimentum. Amet consectetur adipiscing elit pellentesque.

                Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Senectus et netus et malesuada fames ac turpis egestas maecenas. Sodales ut eu sem integer vitae justo eget magna. Adipiscing enim eu turpis egestas. Et tortor at risus viverra adipiscing at. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Et netus et malesuada fames ac turpis. Purus gravida quis blandit turpis cursus in hac habitasse. Ipsum consequat nisl vel pretium lectus quam id. Curabitur vitae nunc sed velit dignissim sodales ut. Et sollicitudin ac orci phasellus egestas tellus. Dis parturient montes nascetur ridiculus mus mauris vitae. Purus faucibus ornare suspendisse sed nisi lacus sed. Sit amet nulla facilisi morbi tempus iaculis urna id. Mattis nunc sed blandit libero volutpat sed cras ornare arcu.
            </div>
            <div className={styles.contact}>

                <div className={styles.cotizacion}>
                    <h5>Monitor de signos vitales</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    <button>Cotización via whatsapp</button>
                    <button style={{background:'#8183CA'}}>Cotización via mail</button>
                </div>
                <div className={styles.shop}><img src='/cart2.png'/>Ver producto en tienda minorista</div>
            </div>
        </div>
        <div className={styles.related}>
        <div className={styles.seccions}>
            <h3>Productos relacionados</h3>
              {/* {
                loading &&
                data.map(({id, description}) => (
                  <div>
                    <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/>
                  </div>
                    )
                  )
            
              } */}
            <div className={styles.swiper}>
              <Swiper
                      slidesPerView={"auto"}
                      spaceBetween={30}
                      modules={[Pagination]}
                      
                    >
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
              
                    </Swiper>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Slug;
