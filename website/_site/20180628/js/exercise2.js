


$(document).ready(function(){
    var subSection = ['Appetizers','freshpasta','meatfish','dessert']
    var subsubSection = [['Bruschette with Tomatoes','Green Rolls','Eggplants','Bruschette','Meatballs','Spicy Beans'],
                         ['Farfalle','Penne','Campanelle','Angel Hair',
    'Acini di Pepe','Orecchiette'],
                         ['Filetto di Manzo','Anatra al Forno','Filetto di Barramundi',
    'Guanciale di vitello brasato','Arrosto di vitello ai carciofi','Orata lessa con maionese al'
                         ],
                         ['Venetian sgroppino','Italian trifle','Amaretti tortoni',
    'Melon salad','Tiramisu gateau','Classic Italian affogato'
                         ],
    ]
    
    $(window).scroll(function(){
        var divide = elementSectionPositions($('section.menu-table'),10)
        if (!(divide>(10-4)/2 && divide <(10+4)/2+1)) return;
        divide = divide - (10-4)/2;
        console.log(divide);
        $('.menu-table .textLeft .menu_button > button:nth-child('+ divide+')').css("background-color","rgba(54,85,41,1)").data("focused",'true');
        $('.menu-table .textLeft .menu_button > button:not(.menu-table .textLeft .menu_button > button:nth-child(' + divide + '))').css("background-color", "rgb(68,51,51)").data("focused", "false");
        for( var i = 0;i < 6;i++){
            var imageName = subSection[divide-1]+'-'+i+'.jpg';
            console.log(imageName);
            var s = i+1;
            var viewContent = '.ImageRight> article.imageBlock:nth-child('+s+')';
            console.log(viewContent);
            $(viewContent+' img').attr("src","./images/"+imageName);
            $(viewContent + ' .description a').text(subsubSection[divide-1][i]);
            console.log($(viewContent + 'aside .description a'));
            console.log(subsubSection[divide-1][i]);
            $('.popup>.modaldialog:nth-child('+s+') img').attr("src","./images/"+imageName);
            $('.popup>.modaldialog:nth-child('+s+') h3').text(subsubSection[divide-1][i]);
            
        }
        
        
        
    }
    
    
    
    )
    
});

function elementSectionPositions(elem,k){
    var $elem = $(elem);
    var currentPos = ((navigator.userAgent.toLowerCase().indexOf('webkit')!= -1)?'body':'html');
    var middle = $(window).height()/2.0 + $(currentPos).scrollTop();
    
    //get the position of the element on the page
    var menuTopCoordinate = $elem.offset().top;
    var menuBottomCoordinate = menuTopCoordinate+$elem.innerHeight();
    if((menuBottomCoordinate <= middle)|| (menuTopCoordinate >= middle)) return -1;
    
    var endValue = Math.ceil((middle-menuTopCoordinate)/($('section.menu-table').innerHeight()/10));    
    return endValue;
    
}