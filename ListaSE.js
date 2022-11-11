function No(val){

    return{
        info:val,
        prox: null,
        
        setInfo : function(value){
            this.info = value
        },
        getInfo : function(){
            return this.info
        },
        
        setProx: function(prx){
            this.prox = prx
        },
        getProx : function(){
            return this.prox
        }
    }
}

function LSE(){
    return {
        inicio:null,
        insereInicio: function(valInicio){
            p = No(valInicio)
            p.setProx(this.inicio)
            this.inicio= p
        },
        insereFim: function(valFim){
            p = this.inicio

            while(p.getProx() != null){
                p =p.getProx()
            }
            np=No(valFim)
            np.setProx(p.getProx())
            p.setProx(np)
        },
        imprime: function(){
            p = this.inicio
            arrayDemo=[]
            while (p != null){
                arrayDemo.push(p.getInfo().toString()+'->')
                p=p.getProx()
               
            }
            console.log(arrayDemo.join(''),'null')
        },
        removeInicio: function(){
            p= this.inicio
            if(p.getProx() != null){
                this.inicio = p.getProx()
            }else{
                this.inicio = null
            }
        },
        removeFim: function(){
            p=this.inicio
            if(p.getProx() != null){
                while (p.getProx() != null){
                    paux=p
                    p=p.getProx()
                }
                paux.setProx(p.getProx())
            }else{
                this.inicio = null
            }
        },
        verificarNo: function(valQ){
            p= this.inicio

            while(p != null){
                if(p.getInfo() == valQ ){
                    break
                }
                j=p
                p=p.getProx()
                
            }
            console.log(p.getInfo())
            return [j,p]

        },
        removerNoEsp: function(valns){
            p = this.verificarNo(valns)
            p[0].setProx(p[1].getProx())

        }
    }
}