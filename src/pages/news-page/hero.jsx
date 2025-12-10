import rasm from "../../assets/HomeIcons/rasm1.png";



function HeroCard(){
    return(
        <div class="max-w-xl mx-auto  rounded-2xl  p-5 text-white">

            <div class="w-full rounded-xl overflow-hidden">
                <img src={rasm} alt="game" class="w-full h-48 sm:h-56 object-cover" />
            </div>


            <div class="flex items-center gap-3 mt-10">
                <span class="inline-block bg-blue-600 text-[20px]  px-8  py-4 rounded-lg">John smooth</span>
                <span class="text-sm text-white/70">5min</span>
            </div>


            <h3 class="mt-8 text-2xl font-bold leading-tight">
                Lorem Ipsum is simply dummy text dummy text
            </h3>


            <p class="mt-6 text-[16px] text-white/80 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>

            <p className="mt-7 text-[17px] text-white/80 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
           



        </div>

    )
}

export default HeroCard