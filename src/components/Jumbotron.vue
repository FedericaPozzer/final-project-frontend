<!-- Jumbotron della schermata Home -->

<script>
export default{
    data(){
        return{
            currentLabel: '',
            currentImage: '',
            index: 0,
            foods: [
                {
                    label: "PIZZA",
                    image: "home-jumbo-images/1.png"
                },
                {
                    label: "HAMBURGER",
                    image: "home-jumbo-images/3.png"
                },
                {
                    label: "PASTA",
                    image: "home-jumbo-images/4.png"
                }
            ],
        }
    },
    created() {
        this.currentLabel = this.foods[this.index].label
        this.currentImage = this.foods[this.index].image
        setInterval(this.jumboTimer, 4000)

    },
    methods:{
        jumboTimer() {
            if(this. index == 2)
            {
                this.index = 0
            }
            else{
                this.index++
            }

            this.currentLabel = this.foods[this.index].label
            this.currentImage = this.foods[this.index].image
        }
    }
}
</script>

<template>
    <div class="jumbotron">
        <div class="image-container">
            <div v-for="food, i in foods" alt="" class="image">    
                    <Transition>
                        <img :src="'./src/assets/' + food.image" alt="" v-if="index == i">
                    </Transition>
                </div>        
        </div>
        <div class="content">
            <div class="d-flex flex-wrap ps-2 bg-content">
                <div class=" d-flex w-100">
                    HO VOGLIA DI
                </div>
                <div id="types" class="w-100 d-flex label">
                    {{ this.currentLabel }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.v-enter-active{
    transition: all 1s ease;

}
.v-leave-active {
    position: absolute;

    transition: all 1s ease;
}

.v-enter-from{
    opacity: 0;
    transform: translateX(-40%);

}
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
  
}
.jumbotron{
    color: white;
    overflow: hidden;
    background-color: var(--bg-primary-color);
    display: grid;
    grid-template-columns: 40vw 60vw;
    padding-top: var(--navbar-height);
    min-height: var(--home-jumbo-height);
    font-family: 'Bebas Neue', sans-serif;
    .image-container{
        position: relative;
        transform: translateX(2vw);
        .image{
            display: flex;
            justify-content: flex-end;
            width: 100%;
            img{
                height: var(--home-jumbo-height);
            }
        }
    }    
    
    .content{
        display: flex;
        .bg-content{
            height: 100%;
            width: 60vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        z-index: 2;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 2.5rem;
        .label{
            font-size: 3rem;
            color: var(--bg-secondary-color);
        }
        @media screen and (min-width: 800px) {
            .label{
                font-size: 6rem;
                line-height: 6rem;
            }
        }
        @media screen and (min-width: 992px) {
            .label{
                font-size: 10rem;
                line-height: 10rem;
            }
        }
        line-height: 3.2rem;
        position: relative;
        
    }
}
</style>