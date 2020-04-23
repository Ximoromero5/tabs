$(document).ready(function () {

    getData();

    function getData() {
        let container = $('#container');

        $.ajax({
            url: 'data.json',
            method: 'GET'
        }).done(function (data) {
            let box = $('<div></div>');

            $.each(data, function (index, obj) {
                let newLabel = (obj.new == true) ? '<button class="new">NEW!</button>' : '';
                let featuredLabel = obj.featured == true ? '<button class="featured">FEATURED</button>' : '';

                let item = $(`
                <div class='item'>
                    <div class='left'>
                        <img src='${obj.logo}'>
                        <div class='text'>
                            <div class='top'>
                                <h5>${obj.company}</h5>
                                ${newLabel}
                                ${featuredLabel}
                            </div>
                            <div class='middle'>
                                <h1>${obj.position}</h1>
                            </div>
                            <div class='bottom'>
                                <div>${obj.postedAt}</div>
                                <span class='dot'></span>
                                <div>${obj.contract}</div>
                                <span class='dot'></span>
                                <div>${obj.location}</div>
                            </div>
                        </div>
                    </div>
                    <div class='right'>
                        <ul>
                            <li>${obj.role}</li>
                            <li>${obj.level}</li>  
                            <li>${
                    $.map(obj.languages, function (e, i) {
                        $(`<li>${e}</li>`)
                    })
                    }</li>
                            <li>${ $.each(obj.tools, function (index, tool) { tool })}</li>
                        </ul>
                    </div>
                </div>
                `);
                $(box).append($(item));
            });

            $(container).html($(box));
            console.log(data);
        });
    }

});