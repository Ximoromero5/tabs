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
                <div class='item feature'>
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
                        <ul id='list'>
                            <li>${obj.role}</li>
                            <li>${obj.level}</li>  
                            ${languages(obj.languages)}
                            ${tools(obj.tools)}
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

    //
    function languages(arr) {
        if (!arr) {
            return '';
        }

        const html = arr.map(lang => `<li>${lang}</li>`).join('');
        return html;
    }

    function tools(arr) {
        if (!arr) {
            return '';
        }

        return arr.map(tool => `<li>${tool}</li>`).join('');
    }

    function userData() {
        $.ajax({
            url: 'http://www.geoplugin.net/json.gp',
            method: 'GET'
        }).done(function (data) {
            console.log(data);
        })
    }

    /* userData(); */

});