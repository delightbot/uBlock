/*******************************************************************************

    µBlock - a Chromium browser extension to block requests.
    Copyright (C) 2014 Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/******************************************************************************/

$(function() {

/******************************************************************************/

// Open links in the proper window
$('a').attr('target', '_blank');
$('a[href*="dashboard.html"]').attr('target', '_parent');

$('.whatisthis').on('click', function() {
    $(this).parent()
    .find('.whatisthis-expandable')
    .toggleClass('whatisthis-expanded');
});


/******************************************************************************/

});