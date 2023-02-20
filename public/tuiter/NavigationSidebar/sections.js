    function TabNavigator(highlight) {
        const sections = [
            {label: 'Home', href:'../HomeScreen/index.html'},
            {label: 'Explore', href:'../Explore/index-a5.html'},

        ]

        return(`
        <a class="list-group-item">${sections.label === highlight ? 'active' : ''}"></a>
        
        `);
    }

    export default TabNavigator;