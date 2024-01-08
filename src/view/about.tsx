import React from "react";

class About extends React.Component<any,any>{

    render():React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined  {

        return(
          <section className={'w-full h-screen flex p-10 flex-col justify-center items-center'}>
              <div className={'mb-6 w-full h-1/4'}>
                  <h2 className={'text-center font-bold text-4xl text-neutral-800'}>About Us</h2>
              </div>
              <div className={'flex col gap-16 pb-16'}>
                  <img className={'size-96 rounded-2xl'} src="src/assets/pickMe2.PNG" alt="img"/>
                  <div className={'flex justify-around flex-col'}>
                  <p className={'leading-6 text text-zinc-700'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda dicta eligendi ex fugiat rem vitae! Architecto,
                      cum cumque eos labore modi optio provident quisquam sequi tenetur veritatis voluptates voluptatum?Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Accusantium assumenda doloremque explicabo facere fuga ipsam libero magnam maxime neque nulla,
                      omnis quasi quod voluptatum! Id quisquam ratione similique soluta voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Accusantium ea error necessitatibus optio qui, repellendus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis debitis delectus doloribus eius enim in incidunt, itaque nam quae quam quis repudiandae voluptatibus.
                      A itaque minus molestiae possimus veritatis!
                      sequi. Adipisci aliquid animi consectetur eligendi quisquam, ratione voluptate! Ab blanditiis
                      dolor harum laboriosam vitae.
                      elit. Accusantium ea error necessitatibus optio qui, repellendus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis debitis delectus doloribus eius enim in incidunt, itaque nam quae quam quis repudiandae voluptatibus.
                      A itaque minus molestiae possimus veritatis!
                      sequi. Adipisci aliquid animi consectetur eligendi quisquam, ratione voluptate! Ab blanditiis
                      dolor harum laboriosam vitae.
                  </p>
                  <button className={'rounded border w-[150px] bg-orange-500 p-2 text-white bottom-2.5'}>READ MORE</button>
                  </div>

              </div>






          </section>
        );
    }


}
export default About;