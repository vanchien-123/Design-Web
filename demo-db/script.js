function hienthi(products) {
    document.getElementById('content').innerHTML = '';
    let s = '';
    for (let i = 0; i < products.length; i++) {
        let item = products[i];
        s += `<div class="sp">
                <div id="image">
                    <img src="jpg/${item.img}" alt="">
                </div>
                <div>
                    <a href="#" onclick="getDetail(${item.id})" class='detail'><h5>${item.name}</h5></a>
                    <div id="price">${item.price}$</div>
                </div>
                <div id="pay">
                    <div class="add" onclick="addToCard(${item.id})" >Add to cart</div>
                    <div id="buy" data-toggle="modal" data-target="#modelId"><p>Buy now</p></div>
                </div>
                <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delivery Address</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="usr">Name:</label>
                            <input type="text" class="form-control"  >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Amount:</label>
                            <input type="number" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Phone:</label>
                            <input type="number" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="pwd">address:</label>
                            <input type="text" class="form-control" >
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" onclick="massage()" class="btn btn-primary" data-dismiss="modal">Confirm</button>
                </div>
            </div>
        </div>
    </div>
            </div>
            `;
    }
    s += '<div style="clear:both"></div>';
    document.getElementById('content').innerHTML = s;
}
//new arival
function loading() {
    document.getElementById('content').innerHTML = '';
    let s = '';
    var dataProductNew = dataProduct.filter(x => x.arival == 'new');
    for (let i = 0; i < dataProductNew.length; i++) {
        let item = dataProductNew[i];
        s += `<div class="sp">
                
                <div id="image">
                    <img src="jpg/${item.img}" alt="">
                </div>
                <div>
                    <a href="#" onclick="getDetail(${item.id})" class='detail'><h5>${item.name}</h5></a>
                    <div id="price">${item.price}$</div>
                </div>
                <div id="pay">
                    <div class="add" onclick="addToCard(${item.id})" >Add to cart</div>
                    <div id="buy" data-toggle="modal" data-target="#modelId"><p>Buy now</p></div>
                </div>
                <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delivery Address</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="usr">Name:</label>
                            <input type="text" class="form-control"  >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Amount:</label>
                            <input type="number" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Phone:</label>
                            <input type="number" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="pwd">address:</label>
                            <input type="text" class="form-control" >
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="massage()" data-dismiss="modal">Confirm</button>
                </div>
            </div>
        </div>
    </div>
            </div>
            `;
    }
    s += '<div style="clear:both"></div>';
    document.getElementById('content').innerHTML = s;

}

function loadDataDiamond() {
    document.getElementById('content').innerHTML = '';
    let s = '';
    var dataProductKC = dataProduct.filter(x => x.brand_id == 'kc');
    for (let i = 0; i < dataProductKC.length; i++) {
        let item = dataProductKC[i];
        s += `<div class="sp">
                <div id="image">
                    <img src="jpg/${item.img}" alt="">
                </div>
                <div>
                    <a href="#" onclick="getDetail(${item.id})" class='detail'><h5>${item.name}</h5></a>
                    <div id="price">${item.price}$</div>
                </div>
                <div id="pay">
                    <div class="add" onclick="addToCard(${item.id})" >Add to cart</div>
                    <div id="buy" data-toggle="modal" data-target="#modelId"><p>Buy now</p></div>
                </div>
                <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delivery Address</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="usr">Name:</label>
                            <input type="text" class="form-control"  >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Amount:</label>
                            <input type="number" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Phone:</label>
                            <input type="number" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="pwd">address:</label>
                            <input type="text" class="form-control" >
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="massage()" data-dismiss="modal">Confirm</button>
                </div>
            </div>
        </div>
    </div>
            </div>
            `;
    }
    s += '<div style="clear:both"></div>';
    document.getElementById('content').innerHTML = s;

}
function loading2() {
    document.getElementById('content').innerHTML = '';
    let s = '';
    var dataProductTA = dataProduct.filter(x => x.brand_id == "ta");
    for (let i = 0; i < dataProductTA.length; i++) {
        let item = dataProductTA[i];
        s += `<div class="sp">
                
                <div id="image">
                    <img src="jpg/${item.img}" alt="">
                </div>
                <div>
                    <a href="#" onclick="getDetail(${item.id})" class='detail'><h5>${item.name}</h5></a>
                    <div id="price">${item.price}$</div>
                </div>
                <div id="pay">
                    <div class="add" onclick="addToCard(${item.id})" >Add to cart</div>
                    <div id="buy" data-toggle="modal" data-target="#modelId"><p>Buy now</p></div>
                </div>
                <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delivery Address</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="myForm">
                        <div class="form-group">
                            <label for="usr">Name:</label>
                            <input type="text" name="name" class="form-control"  >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Amount:</label>
                            <input type="number" name="amount" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Phone:</label>
                            <input type="number" name="phone" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="pwd">address:</label>
                            <input type="text" name="address" class="form-control" >
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="mas" onClick="massage()" data-dismiss="modal">Confirm</button>
                </div>
            </div>
        </div>
    </div>
            </div>
            `;
    }
    s += '<div style="clear:both"></div>';
    document.getElementById('content').innerHTML = s;

}
function loading3() {
    document.getElementById('content').innerHTML = '';
    let s = '';
    var dataProductHP = dataProduct.filter(x => x.brand_id == 'hp');
    for (let i = 0; i < dataProductHP.length; i++) {
        let item = dataProductHP[i];
        s += `<div class="sp">
                
                <div id="image">
                    <img src="jpg/${item.img}" alt="">
                </div>
                <div>
                    <a href="#" onclick="getDetail(${item.id})" class='detail'><h5>${item.name}</h5></a>
                    <div id="price">${item.price}$</div>
                </div>
                <div id="pay">
                    <div class="add" onclick="addToCard(${item.id})" >Add to cart</div>
                    <div id="buy" data-toggle="modal" data-target="#modelId"><p>Buy now</p></div>
                </div>
                <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delivery Address</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="usr">Name:</label>
                            <input type="text" class="form-control"  >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Amount:</label>
                            <input type="number" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Phone:</label>
                            <input type="number" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="pwd">address:</label>
                            <input type="text" class="form-control" >
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="massage()" data-dismiss="modal">Confirm</button>
                </div>
            </div>
        </div>
    </div>
            </div>
            `;
    }
    s += '<div style="clear:both"></div>';
    document.getElementById('content').innerHTML = s;
}
//--------------------- cart----------------------
$(document).ready(function () {
    // $('#mas').click(function () {
    //     alert('Đã đặt hàng thành công');
    // });

    var card = localStorage.getItem('cart');
    if (card) {
        var cardList = JSON.parse(card);
        $('#cartTotalItem').text(cardList?.length ?? 0);
    }
});
var cart = [];

function massage() {
   alert("Đã đặt hàng thành công")
}
function getDetail(id) {
    localStorage.setItem('id', id);
    window.location = 'detail.html';
}

function addToCard(id) {
    // tìm sản phẩm trong danh sách sản phẩm product.find(x=>x.id == id);
    // lấy danh sách sản phẩm trong localStorage var listCard = JSON.paste(localstorage.getItem('card')) =>> là list
    // so sánh sản phẩm truyền vào với sản phẩm trên card var indexProduct = listCard.findIndex(x=>x.id == id);
    //nếu indexProduct == -1 => add product vào card\
    // nếu indexProduct >=0 =>> lấy sản phẩm trên card + 1
    let product = dataProduct.find(x => x.id == id);
    var card = localStorage.getItem('cart');
    if (card) {
        var listCard = JSON.parse(card);
        var index = listCard.findIndex(x => x.id == id);
        if (index == -1) {
            product.quantity = 1;
            listCard.push(product);
        } else {
            listCard.forEach(item => {
                if (item.id == id) {
                    item.quantity += 1;
                }
            });
        }

        localStorage.setItem('cart', JSON.stringify(listCard));
        $('#cartTotalItem').text(listCard.length)
    } else {
        product.quantity = 1;
        localStorage.setItem('cart', JSON.stringify([product]));
        $('#cartTotalItem').text(1)
    }
}

//find function cart
function findInProduct(id) {
    let position = -1;
    dataProduct.forEach((element, index) => {
        //    console.log('===',index, element);
        if (element.id == id) position = index;
    });
    return position;
}

function loadCart() {
    console.log(localStorage.getItem('cart'));
    cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    console.log(cart);
}


function findInCart(id) {
    let position = -1;
    cart.forEach((element, index) => {
        if (element.id == id) position = index;
    });
    return position;
}


function showCart() {
    loadCart();
    console.log(localStorage.getItem('cart'));

    let t = `<table class='table'><thead>
                <tr><th>STT </th><th>ID</th><th>Name </th><th>Avatar </th> <th>Quantity</th>  
                <th> Price </th> <th>Total</th> <th>Edit</ht></tr></thead>
                <tbody>
                `;
    let stt = 0;
    let total = 0;
    $.each(cart, function (k, item) {
        stt++; let thanhtien = item.price * item.quantity; total += thanhtien;
        t += `<tr><th> ${stt} </th><th>${item.id}</th><th>${item.name} </th><th><img id="omg" src="jpg/${item.img}" alt=""></th> <th>${item.quantity}</th>  
            <th> ${item.price}$ </th> <th>${thanhtien}$</th>  <th>
            <a class='deleteCartItem' href=# data-id='${item.id}'>Delete</a>
            </ht></tr>`;
    });
    t += `<tr><td colspan=6>Tổng</td><td>${total}$</td></tr>`;
    t += '</tbody></table>';

    $('#cart').html(t);
    //alert(t);
    $('a.deleteCartItem').click(function () {
        let n = findInCart($(this).data('id'));
        cart.splice(n, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        $(this).parent().parent().remove();
    });
}

function cartTotalItem() {
    let t = 0;
    $.each(cart, function (k, v) {
        t += v.quantity;
    });
    return t;
}


//showDetail
var id;

$(document).ready(function () {
    // window.localStorage.clear();
    // $('div.sp div a.detail').click(function () {
    //     event.preventDefault();
    //     let id = $(this).data('id');
    //     alert('chi tiet sp co id la:' + id);
    //     localStorage.setItem('id', id);
    //     window.location = 'detail.html';
    //     id = id;
    // });
});


function showDetail() {
    var item = dataProduct.find(x => x.id == id);
    let t = `<section class="product">
    <div class="product__photo">
        <div class="photo-container">
            <div class="photo-main">
                <img id="imgs" src="jpg/${item.img}">
            </div>
        </div>
    </div>
    <div class="product__info">
        <div class="title">
            <h1>${item.name}</h1>
            <span>CODE: ${item.id}</span>
        </div>
        <div class="price">
            $ <span>${item.price}</span>
        </div>
        <div class="amout">
            <h3>Số lượng</h3>
            <input type="number" min="0" step="1"  name="" id="">
            <h3>Địa chỉ</h3>
            <input type="text" style="width:300px",  name="" >
        </div>
        <button class="buy--btn" data-toggle="modal" data-target="#myModal">BUY NOW</button>
        <ul>
            <li><i class="fa-solid fa-square-check"></i> Giá sản phẩm thay đổi tùy trọng lượng vàng và đá</li>
            <li><i class="fa-solid fa-square-check"></i> Đổi sản phẩm trong 48h tại hệ thống của hàng IC</li>
            <li><i class="fa-solid fa-square-check"></i> Miễn phí giao hàng toàn quốc 1-7 ngày</li>
        </ul>
    </div>
    <div class="description">
        <h3>Mô tả sản phẩm</h3>
        <ul>
            <li>${item.cat_id}</li>
            <li>${item.cat_name}</li>
            <li>${item.cat_mau}</li>
            <li>${item.cat_hinh}</li>
            <li>${item.cat_gioitinh}</li>
        </ul>
    </div>
    <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          Đã đặt hàng thành công
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
</section>`
    $('#product_detail').html(t);
}
