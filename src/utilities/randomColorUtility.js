export default class RandomColorGenerator {
    static generate(){
        var ColorCode = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        return ColorCode;
    }
}