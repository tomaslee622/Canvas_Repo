$('#btns').append(`<button class="btn btn-info fas fa-palette color-picker">Color</button>`);

const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    useAsButton: true,
    sliders: 'v',
    default: '#0000ff',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba:  true,
            hsla:  true,
            hsva:  true,
            cmyk:  true,
            input:  true,
            clear:  true,
            save: true
        }
    }
});

let contextFill = '';

pickr.on('init', instance => {
    console.log('init', instance);
    const hexColors = instance._color.toHEXA().toString();
    contextFill= hexColors;
}).on('hide', instance => {
    console.log('hide', instance);
}).on('show', (color, instance) => {
    console.log('show', color, instance);
}).on('save', (color, instance) => {
    console.log('save', color, instance);
}).on('clear', instance => {
    console.log('clear', instance);
}).on('change', (color, instance) => {
    console.log('change', color, instance);
}).on('changestop', instance => {
    console.log('changestop', instance);
}).on('cancel', instance => {
    console.log('cancel', instance);
}).on('swatchselect', (color, instance) => {
    console.log('swatchselect', color, instance);
});

// pickr.on('change',(color,instance) =>{
//     let colors = color[0].toHEXA();
//     console.log(colors);
//     contextReal.fillStyle =`hex(${colors[0]})`;

pickr.on('change', (color, instance) =>{
    const hexColors = color.toHEXA().toString();
    contextFill= hexColors;
    //console.log(contextFill)
    currentFunction.fillColor = hexColors;
    currentFunction.color = hexColors;
})


