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
                let newLabel = obj.new ? '<button class="new">NEW!</button>' : '';
                let featuredLabel = obj.featured ? '<button class="featured">FEATURED</button>' : '';

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
                        <ul class='list'>
                            <li data-role='${obj.role}'>${obj.role}</li>
                            <li data-level='${obj.level}'>${obj.level}</li>  
                            ${languages(obj.languages)}
                            ${tools(obj.tools)}
                        </ul>
                    </div>
                </div>
                `);
                $(box).append($(item));
            });

            $(container).html($(box));

            $('.list li').each(function () {
                $(this).click(function () {
                    addFilter($(this).text());
                });
            });

        }); //Fin done
    }

    function languages(arr) {
        if (!arr) {
            return '';
        }

        return arr.map(lang => `<li data-languages='${lang}'>${lang}</li>`).join('');
    }

    function tools(arr) {
        if (!arr) {
            return '';
        }

        return arr.map(tool => `<li data-tools='${tool}'>${tool}</li>`).join('');
    }

    function addFilter(filter) {
        $('.filterBox').addClass('active');

        let element = `
            <div class='itemFilter'>
                <div class='name'>${filter}</div>
                <div class='close'>
                    <i class="fas fa-times"></i>
                </div>
            </div>
        `;

        $('.filterList').append($(element));
    }

});