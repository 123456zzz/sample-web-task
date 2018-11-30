$(function(){
    $("#amount-increase").click(function(){
        var value = Number($(".num-input input").val());
        value = value + 1;
        $(".num-input input").val(value);
    });
    $("#amount-decrease").click(function(){
        var value = Number($(".num-input input").val());
        if(value>=1){
            value = value - 1;
            $(".num-input input").val(value);
        }
    });
    $(".sort-item").click(function(){
        var value= $(this).attr("data-value");
        $(this).css("outline","red solid 1px");
        $(this).siblings().css("outline","grey solid 1px");
        $("#price").text("￥"+ value );
    });
    $(".pay-btn").click(function(){
        var unitprice = Number($("#price").text().replace(/￥/,""));
        var amount = Number($(".num-input input").val());
        alert(" 你需要支付"+ unitprice * amount);
    })
});