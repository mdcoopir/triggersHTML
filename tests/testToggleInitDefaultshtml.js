const htmlString = () => {
    return `       
    < !DOCTYPE html>

    <html>

    <head>
        <title>Trigger.js Testing</title>
    </head>

    <body>
        <svg style="display: none" version="2.0">
            <defs>
                <symbol id="folder_closed" viewbox="0 -10 300 310">
                    <g opacity="0.2">
                        <path
                            d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" />
                    </g>
                    <path
                        d="M216,72H130.6665L102.93359,51.2002A16.10157,16.10157,0,0,0,93.333,48H40A16.01817,16.01817,0,0,0,24,64V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V88A16.01817,16.01817,0,0,0,216,72ZM40,64l53.333.00024L114.667,80,93.333,95.99976V96H40ZM216,200H40V112H93.333a16.10157,16.10157,0,0,0,9.60058-3.2002L130.6665,88H216Z" />
                </symbol>
            </defs>
        </svg>

        <svg style="display: none" version="2.0">
            <defs>
                <symbol id="folder_open" viewbox="0 -10 300 310">
                    <g opacity="0.2">
                        <path
                            d="M32,208l30.17661-90.52982A8,8,0,0,1,69.76607,112H208V88a8,8,0,0,0-8-8H130.66667a8,8,0,0,1-4.8-1.6L98.13333,57.6a8,8,0,0,0-4.8-1.6H40a8,8,0,0,0-8,8Z" />
                    </g>
                    <path
                        d="M241.88037,110.64453A16.03934,16.03934,0,0,0,228.90039,104H216V88a16.01833,16.01833,0,0,0-16-16H130.667l-27.7334-20.7998A16.10323,16.10323,0,0,0,93.333,48H40A16.01833,16.01833,0,0,0,24,64V208c0,.05127.00684.10059.00781.15137.002.1123.00977.22412.0166.33642.01172.19043.02832.37891.05274.56592q.02051.15234.04639.30371c.03515.20459.07861.40576.1289.605.021.08252.04.16553.064.24756.06836.23877.14843.47217.23779.70117.0166.042.02978.08545.04687.12793a7.867,7.867,0,0,0,.39014.81592c.01563.02881.03467.05566.05078.084q.1919.33912.41553.65625c.019.02686.0332.05567.05225.08252.03564.04883.07763.09082.11377.13916.12255.16163.24951.31885.38378.47022.06836.07764.13672.1543.20752.22851.14161.14844.29.29.44287.42725.064.05713.125.11768.19043.17285a7.94692,7.94692,0,0,0,.69581.52832l.01953.01172a7.96822,7.96822,0,0,0,.73632.43311c.064.0332.12989.0625.19483.09375.19971.09765.40332.18847.61182.26953.0791.03027.1582.05859.23828.08691q.30176.1062.61377.188c.08447.02246.168.04541.25293.06494.21386.04883.43164.08643.65185.11817.0791.01123.15674.02685.23633.03613A8.06189,8.06189,0,0,0,32,216H208a8.00117,8.00117,0,0,0,7.58984-5.47021l28.48926-85.47022A16.039,16.039,0,0,0,241.88037,110.64453ZM93.333,64l27.7334,20.7998A16.10323,16.10323,0,0,0,130.667,88H200v16H69.76611a15.98037,15.98037,0,0,0-15.1792,10.94043L40,158.70166V64ZM202.23389,200H43.09961l26.6665-80H228.90039Z" />
                </symbol>
            </defs>
        </svg>

        <div triggerInit target="default" triggerEvent="click" triggerCallback="toggleClassesCallback" toggleClasses='target_open target_closed' class='target_open first_parent'>
            <div trigger="default">
                <svg width="50" height="50" version="2.0" class="folder_img_closed">
                    <use href="#folder_closed"></use>
                </svg>
                <svg width="50" height="50" version="2.0" class="folder_img_open">
                    <use href="#folder_open"></use>
                </svg>
                <label>Level 1</label>
            </div>
            <div class='folder_children'>
                <div class='content'>
                    <div>
                        1
                    </div>
                </div>
                <div target="default" class='target_closed'>
                    <div trigger="default">

                        <svg width="50" height="50" version="2.0" class="folder_img_closed">
                            <use href="#folder_closed"></use>
                        </svg>
                        <svg width="50" height="50" version="2.0" class="folder_img_open">
                            <use href="#folder_open"></use>
                        </svg>
                        <label>Level 1.1</label>
                    </div>
                    <div class='folder_children'>
                        <div class='content'>
                            1.1
                        </div>
                    </div>
                </div>
                <div target="default" class='target_closed'>
                    <div trigger="default">

                        <svg width="50" height="50" version="2.0" class="folder_img_closed">
                            <use href="#folder_closed"></use>
                        </svg>
                        <svg width="50" height="50" version="2.0" class="folder_img_open">
                            <use href="#folder_open"></use>
                        </svg>
                        <label>Level 1.2</label>
                    </div>

                    <div class='folder_children'>
                        <div class='content'>
                            1.2
                        </div>
                    </div>

                </div>
                <div target="default" class='target_open'>
                    <div trigger="default">

                        <svg width="50" height="50" version="2.0" class="folder_img_closed">
                            <use href="#folder_closed"></use>
                        </svg>
                        <svg width="50" height="50" version="2.0" class="folder_img_open">
                            <use href="#folder_open"></use>
                        </svg>
                        <label>Level 1.3</label>
                    </div>

                    <div class='folder_children'>
                        <div class='content'>
                            1.3
                        </div>
                        <div target="default" class='target_closed'>
                            <div trigger="default">

                                <svg width="50" height="50" version="2.0" class="folder_img_closed">
                                    <use href="#folder_closed"></use>
                                </svg>
                                <svg width="50" height="50" version="2.0" class="folder_img_open">
                                    <use href="#folder_open"></use>
                                </svg>
                                <label>Level 1.3.1</label>
                            </div>

                            <div class='folder_children'>
                                <div class='content'>
                                    1.3.1
                                </div>
                            </div>
                        </div>
                        <div target="default" class='target_closed'>
                            <div trigger="default">

                                <svg width="50" height="50" version="2.0" class="folder_img_closed">
                                    <use href="#folder_closed"></use>
                                </svg>
                                <svg width="50" height="50" version="2.0" class="folder_img_open">
                                    <use href="#folder_open"></use>
                                </svg>
                                <label>Level 1.3.2</label>
                            </div>

                            <div class='folder_children'>
                                <div class='content'>
                                    1.3.2
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div class="content">
                    <div>
                        Level 1
                    </div>
                    <div>
                        Testing Text 2
                    </div>
                    <div>
                        Testing Text 3
                    </div>
                </div>
            </div>
        </div>
    </body>

    </html>
    `
}

export default htmlString;
